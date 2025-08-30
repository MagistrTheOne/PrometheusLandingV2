"use client"

import { motion } from "framer-motion"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { TrendingUp, DollarSign, Users, Target } from "lucide-react"

const revenueData = [
  { month: "Янв", revenue: 0, projection: 0 },
  { month: "Фев", revenue: 0, projection: 0 },
  { month: "Мар", revenue: 0, projection: 0 },
  { month: "Апр", revenue: 0, projection: 0 },
  { month: "Май", revenue: 0, projection: 0 },
  { month: "Июн", revenue: 0, projection: 0 },
  { month: "Июл", revenue: 0, projection: 0 },
  { month: "Авг", revenue: 0, projection: 0 },
  { month: "Сен", revenue: 0, projection: 0 },
  { month: "Окт", revenue: 0, projection: 0 },
  { month: "Ноя", revenue: 0, projection: 0 },
  { month: "Дек", revenue: 0, projection: 0 },
  { month: "2025", revenue: 0, projection: 0 },
  { month: "2026", revenue: 0, projection: 0 },
  { month: "2027", revenue: 0, projection: 0 },
]

const growthData = [
  { year: "2025", prometheus: 100, gpt: 85, claude: 80, gemini: 75 },
  { year: "2026", prometheus: 150, gpt: 90, claude: 85, gemini: 80 },
  { year: "2027", prometheus: 250, gpt: 95, claude: 90, gemini: 85 },
  { year: "2028", prometheus: 400, gpt: 100, claude: 95, gemini: 90 },
]

const marketData = [
  { sector: "Финансы", prometheus: 95, competitors: 60 },
  { sector: "Здравоохранение", prometheus: 90, competitors: 55 },
  { sector: "Образование", prometheus: 85, competitors: 50 },
  { sector: "Транспорт", prometheus: 88, competitors: 45 },
  { sector: "Энергетика", prometheus: 92, competitors: 40 },
]

export function MetricsSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Метрики роста</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Демонстрируем впечатляющие результаты и прогнозы развития Prometheus AGI
          </p>
        </motion.div>

        {/* Ключевые метрики */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-background rounded-lg border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2 gradient-text">$50M+</h3>
            <p className="text-muted-foreground">Рыночная оценка</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg border border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-2 gradient-text">400%</h3>
            <p className="text-muted-foreground">Рост производительности</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2 gradient-text">1M+</h3>
            <p className="text-muted-foreground">Потенциальных клиентов</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg border border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-2 gradient-text">95%</h3>
            <p className="text-muted-foreground">Точность решений</p>
          </div>
        </motion.div>

        {/* Графики */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* График роста производительности */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background p-6 rounded-lg border border-border"
          >
            <h3 className="text-xl font-semibold mb-6">Сравнение с конкурентами</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="year" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="prometheus" 
                  stroke="#00d4ff" 
                  strokeWidth={3}
                  name="Prometheus AGI"
                />
                <Line 
                  type="monotone" 
                  dataKey="gpt" 
                  stroke="#888" 
                  strokeWidth={2}
                  name="GPT"
                />
                <Line 
                  type="monotone" 
                  dataKey="claude" 
                  stroke="#666" 
                  strokeWidth={2}
                  name="Claude"
                />
                <Line 
                  type="monotone" 
                  dataKey="gemini" 
                  stroke="#444" 
                  strokeWidth={2}
                  name="Gemini"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* График рыночного присутствия */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-background p-6 rounded-lg border border-border"
          >
            <h3 className="text-xl font-semibold mb-6">Рыночное присутствие по секторам</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="sector" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="prometheus" fill="#00d4ff" name="Prometheus AGI" />
                <Bar dataKey="competitors" fill="#666" name="Конкуренты" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Прогноз доходов */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-background p-6 rounded-lg border border-border"
        >
          <h3 className="text-xl font-semibold mb-6">Прогноз доходов (2024-2027)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #333',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="projection" 
                stackId="1"
                stroke="#00ff88" 
                fill="#00ff88" 
                fillOpacity={0.3}
                name="Прогноз"
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stackId="1"
                stroke="#00d4ff" 
                fill="#00d4ff" 
                fillOpacity={0.6}
                name="Доходы"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  )
}
