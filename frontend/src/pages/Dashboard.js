import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import axios from 'axios';

function Dashboard() {
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    balance: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        const transactions = response.data;
        
        const summary = transactions.reduce(
          (acc, transaction) => {
            if (transaction.type === 'income') {
              acc.totalIncome += transaction.amount;
            } else {
              acc.totalExpenses += transaction.amount;
            }
            return acc;
          },
          { totalIncome: 0, totalExpenses: 0 }
        );

        summary.balance = summary.totalIncome - summary.totalExpenses;
        setSummary(summary);
      } catch (error) {
        console.error('Error fetching summary:', error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'success.light',
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total Income
            </Typography>
            <Typography component="p" variant="h4">
              ${summary.totalIncome.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'error.light',
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total Expenses
            </Typography>
            <Typography component="p" variant="h4">
              ${summary.totalExpenses.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: summary.balance >= 0 ? 'success.light' : 'error.light',
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Balance
            </Typography>
            <Typography component="p" variant="h4">
              ${summary.balance.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard; 