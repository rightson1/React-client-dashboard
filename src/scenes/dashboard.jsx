import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import BarChart from "../components/Barchat";
import StatBox from "../components/StatBox";
import ProgressCircle from "../components/ProgressCircle";
const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            <Button
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                }}
            >
                <DownloadOutlinedIcon />
                <Typography variant="h5" fontWeight="bold" sx={{ ml: "10px" }}>DOWNLOAD RECEIPTS</Typography>
            </Button>
        </Box>
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="20px"
            gridAutoRows="120px">
            <Box
                gridColumn={{ sm: "span 6", md: "span 3" }}
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox
                    title="12,361"
                    subtitle="Emails Sent"
                    progress="0.75"
                    increase="+14%"
                    icon={
                        <EmailIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box
                gridColumn={{ sm: "span 6", md: "span 3" }}
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox
                    title="431,225"
                    subtitle="Sales Obtained"
                    progress="0.50"
                    increase="+21%"
                    icon={
                        <PointOfSaleIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box
                gridColumn={{ sm: "span 6", md: "span 3" }}
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox
                    title="32,441"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+5%"
                    icon={
                        <PersonAddIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box
                gridColumn={{ sm: "span 6", md: "span 3" }}
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox
                    title="1,325,134"
                    subtitle="Traffic Received"
                    progress="0.80"
                    increase="+43%"
                    icon={
                        <TrafficIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>

            {/* Row 2 */}

            <Box gridColumn={{ sm: "span 12", md: "span 8" }} gridRow="span 2">
                <Box Box
                    mt="25px"
                    padding="0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            Revenue Generated
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color={colors.greenAccent[500]}
                        >
                            $59,342.32
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon sx={{
                                fontSize: "20px",
                                color: colors.greenAccent[500]
                            }} />
                        </IconButton>
                    </Box>
                </Box>
                <Box height="250px" mt="-20px">
                    <LineChart isDashboard={true} />
                </Box>
            </Box>

            <Box
                gridColumn={{ sm: 'span 12', md: 'span 4' }}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"

            >

                <Box display="flex" justifyContent="space-between"
                    alignItems="center" borderBottom={`4px solid  ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px"
                >
                    <Typography variant="h5" fontWeight="600" colors={colors.grey[100]}>Recent Transactions</Typography>
                </Box>
                {mockTransactions.map((transaction, index) => (
                    <Box key={index}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid  ${colors.primary[500]}`}

                        p="15px"
                    >
                        <Box>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant="h5"
                                fontWeight="600"
                            >
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                        <Box
                            backgroundColor={colors.greenAccent[500]}
                            p="5px 10px"
                            borderRadius="4px"
                        >
                            ${transaction.cost}
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box
                gridColumn={{ sm: "span 12", md: "span 6" }}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h5" fontWeight="600">
                    Campaign
                </Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                >
                    <ProgressCircle size="125" />
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        sx={{ mt: "15px" }}
                    >
                        $48,352 revenue generated
                    </Typography>
                    <Typography>Includes extra misc expenditures and costs</Typography>
                </Box>

            </Box>
            <Box
                gridColumn={{ sm: "span 12", md: "span 6" }}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    sx={{ padding: "30px 30px 0 30px" }}
                >
                    Sales Quantity
                </Typography>
                <Box height="250px" mt="-20px">
                    <BarChart isDashboard={true} />
                </Box>
            </Box>
        </Box>



    </Box>;
};

export default Dashboard;
