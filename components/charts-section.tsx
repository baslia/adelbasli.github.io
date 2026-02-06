"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts"

const educationData = [
  { name: "AI", value: 30 },
  { name: "Emotional Intelligence", value: 30 },
  { name: "Nutrition", value: 10 },
  { name: "Communication", value: 10 },
  { name: "Project Management", value: 20 },
]

const educationColors = [
  "rgba(0, 123, 255, 0.8)",
  "rgba(255, 193, 7, 0.6)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(255, 109, 64, 0.6)",
  "rgba(153, 102, 255, 0.6)",
]

const mediumData = [
  { month: "Jul 2024", views: 395, reads: 182 },
  { month: "Aug 2024", views: 1000, reads: 624 },
  { month: "Sep 2024", views: 1100, reads: 673 },
  { month: "Oct 2024", views: 526, reads: 275 },
  { month: "Nov 2024", views: 1000, reads: 604 },
  { month: "Dec 2024", views: 1700, reads: 1000 },
  { month: "Jan 2025", views: 1300, reads: 779 },
  { month: "Feb 2025", views: 1100, reads: 609 },
  { month: "Mar 2025", views: 1200, reads: 695 },
  { month: "Apr 2025", views: 1920, reads: 1000 },
  { month: "May 2025", views: 1600, reads: 910 },
  { month: "Jun 2025", views: 1800, reads: 939 },
  { month: "Jul 2025", views: 2000, reads: 1000 },
  { month: "Aug 2025", views: 2000, reads: 1000 },
  { month: "Sep 2025", views: 1980, reads: 991 },
  { month: "Oct 2025", views: 2000, reads: 989 },
  { month: "Nov 2025", views: 1600, reads: 760 },
  { month: "Dec 2025", views: 1500, reads: 600 },
]

export function EducationChart() {
  return (
    <section className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Continuous Learning Classes
      </h2>
      <div className="w-full max-w-[500px] mx-auto">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={educationData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {educationData.map((_, index) => (
                <Cell key={index} fill={educationColors[index]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--card-foreground))",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export function MediumStatsChart() {
  return (
    <section className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Articles Stats
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={mediumData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            angle={-45}
            textAnchor="end"
            height={70}
          />
          <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--card-foreground))",
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="views"
            stroke="rgba(75, 192, 192, 1)"
            fill="rgba(75, 192, 192, 0.2)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="reads"
            stroke="rgba(153, 102, 255, 1)"
            fill="rgba(153, 102, 255, 0.2)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  )
}
