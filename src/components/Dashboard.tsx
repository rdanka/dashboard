import { Card, Grid, Col, DonutChart, BarChart, AreaChart } from "@tremor/react";
import {  Card as UICard, CardContent, CardDescription, CardTitle } from "./ui/card";
import InfoCard from "./InfoCard";
import { Car, CarFront } from "lucide-react";


const Dashboard = () => {
    const cities = [
        {
          name: "New York",
          sales: 9800,
        },
        {
          name: "London",
          sales: 4567,
        },
        {
          name: "Hong Kong",
          sales: 3908,
        },
        {
          name: "San Francisco",
          sales: 2400,
        },
        {
          name: "Singapore",
          sales: 1908,
        },
        {
          name: "Zurich",
          sales: 1398,
        },
      ];

      const chartdata = [
        {
          name: "Amphibians",
          "Number of threatened species": 2488,
        },
        {
          name: "Birds",
          "Number of threatened species": 1445,
        },
        {
          name: "Crustaceans",
          "Number of threatened species": 743,
        },
        {
          name: "Ferns",
          "Number of threatened species": 281,
        },
        {
          name: "Arachnids",
          "Number of threatened species": 251,
        },
        {
          name: "Corals",
          "Number of threatened species": 232,
        },
        {
          name: "Algae",
          "Number of threatened species": 98,
        },
      ];

      const chartdatas = [
        {
          date: "Jan 22",
          SemiAnalysis: 2890,
          "The Pragmatic Engineer": 2338,
        },
        {
          date: "Feb 22",
          SemiAnalysis: 2756,
          "The Pragmatic Engineer": 2103,
        },
        {
          date: "Mar 22",
          SemiAnalysis: 3322,
          "The Pragmatic Engineer": 2194,
        },
        {
          date: "Apr 22",
          SemiAnalysis: 3470,
          "The Pragmatic Engineer": 2108,
        },
        {
          date: "May 22",
          SemiAnalysis: 3475,
          "The Pragmatic Engineer": 1812,
        },
        {
          date: "Jun 22",
          SemiAnalysis: 3129,
          "The Pragmatic Engineer": 1726,
        },
      ];
    
    return (
        <div className="m-6 w-full">
            <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
                <Col numColSpan={1} numColSpanLg={2}>
                    <Card>
                        <CardTitle>
                            Overall Analytics
                        </CardTitle>
                        <CardDescription>sales summary</CardDescription>
                        <CardContent className="flex flex-wrap  gap-3">
                            <InfoCard color='red'>
                                <CardContent>
                                    <div className="rounded-full p-1 bg-red-300 w-min text-white">
                                        <CarFront />
                                    </div>
                                    <CardTitle>
                                        Sales
                                    </CardTitle>
                                    <CardDescription>
                                        100
                                    </CardDescription>
                                </CardContent>
                            </InfoCard>
                            <InfoCard color='red'>
                                <CardContent>
                                    <div className="rounded-full p-3 bg-red-300 w-min text-white">
                                        <CarFront />
                                    </div>
                                    <CardTitle>
                                        Sales
                                    </CardTitle>
                                    <CardDescription>
                                        100
                                    </CardDescription>
                                </CardContent>
                            </InfoCard>
                            <InfoCard color='red'>
                                <CardContent>
                                    <div className="rounded-full p-3 bg-red-300 w-min text-white">
                                        <CarFront />
                                    </div>
                                    <CardTitle>
                                        Sales
                                    </CardTitle>
                                    <CardDescription>
                                        100
                                    </CardDescription>
                                </CardContent>
                            </InfoCard>
                            <InfoCard color='red'>
                                <CardContent>
                                    <div className="rounded-full p-3 bg-red-300 w-min text-white">
                                        <CarFront />
                                    </div>
                                    <CardTitle>
                                        Sales
                                    </CardTitle>
                                    <CardDescription>
                                        100
                                    </CardDescription>
                                </CardContent>
                            </InfoCard>
                        </CardContent>
                    </Card>
                </Col>
                <Card>
                <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
                </Card>
                <Col>
                    <Card>
                    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Number of threatened species"]}
      colors={["blue"]}
      yAxisWidth={48}
    />
                    </Card>
                </Col>
                <Card>
                <AreaChart
      className="h-72 mt-4"
      data={chartdatas}
      index="date"
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      colors={["indigo", "cyan"]}
    />
                </Card>
                <Card>
                asd
                </Card>
            </Grid>
        </div>
    )
}

export default Dashboard