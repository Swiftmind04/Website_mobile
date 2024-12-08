import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DollarCircleOutlined, TagsOutlined } from '@ant-design/icons';
import axios from '../../../axios';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await axios.get('/order/all');
        const ordersData = ordersResponse.data;
        
        const totalOrders = ordersData.length;
        const totalRevenue = ordersData
          .filter(order => order.paymentStatus === "Đã thanh toán")
          .reduce((sum, order) => sum + order.price, 0);

        const productsResponse = await axios.get('/product');
        const products = productsResponse.data;
        const totalProducts = products.length;

        const usersResponse = await axios.get('/user');
        const totalUsers = usersResponse.data.length;

        setStats({
          totalUsers,
          totalOrders,
          totalRevenue,
          totalProducts
        });

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Tổng quan</h2>
      
      <Row gutter={[16, 16]} className="stats-row">
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <Statistic
              title={<span className="stat-title">Tổng người dùng</span>}
              value={stats.totalUsers}
              prefix={<UserOutlined className="stat-icon user-icon" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Tổng đơn hàng"
              value={stats.totalOrders}
              prefix={<ShoppingCartOutlined className="order-icon" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Doanh thu"
              value={stats.totalRevenue.toLocaleString()}
              prefix={<DollarCircleOutlined className="revenue-icon" />}
              suffix="VNĐ"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Tổng sản phẩm"
              value={stats.totalProducts}
              prefix={<TagsOutlined className="product-icon" />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
