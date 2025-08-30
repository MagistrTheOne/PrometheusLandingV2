"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, Globe, Cpu, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Brain,
    title: "Полная автономность",
    description: "Prometheus AGI принимает решения независимо, без человеческого вмешательства. Система способна анализировать сложные ситуации и находить оптимальные решения.",
    color: "white"
  },
  {
    icon: Zap,
    title: "Самообучение и эволюция",
    description: "Постоянное улучшение собственных алгоритмов и способностей. Система учится на каждом взаимодействии и становится умнее с каждым днем.",
    color: "white"
  },
  {
    icon: Shield,
    title: "Безопасность и контроль",
    description: "Встроенные протоколы безопасности и экстренного отключения. Полный контроль над действиями системы с возможностью мгновенной остановки.",
    color: "white"
  },
  {
    icon: Globe,
    title: "Глобальная интеграция",
    description: "Способность работать с любыми системами и платформами. Универсальная архитектура для интеграции в существующую инфраструктуру.",
    color: "white"
  },
  {
    icon: Cpu,
    title: "Высокая производительность",
    description: "Оптимизированная архитектура обеспечивает скорость обработки в 10 раз выше конкурентов. Эффективное использование вычислительных ресурсов.",
    color: "white"
  },
  {
    icon: Target,
    title: "Точность решений",
    description: "95% точность в принятии решений благодаря продвинутым алгоритмам машинного обучения и нейронным сетям нового поколения.",
    color: "white"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему <span className="text-white">Prometheus AGI</span> превосходит конкурентов
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Уникальная технология, которая открывает новую эру искусственного интеллекта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-white/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Сравнительная таблица */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-lg border border-gray-800 p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Сравнение с конкурентами</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4 font-semibold text-white">Характеристика</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">Prometheus AGI</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-300">GPT-5</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-300">Claude</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-300">Gemini</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-4 text-white">Автономность</td>
                  <td className="text-center py-4 px-4 text-white font-semibold">✅ Полная</td>
                  <td className="text-center py-4 px-4 text-gray-300">❌ Ограниченная</td>
                  <td className="text-center py-4 px-4 text-gray-300">❌ Ограниченная</td>
                  <td className="text-center py-4 px-4 text-gray-300">❌ Ограниченная</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-4 text-white">Самообучение</td>
                  <td className="text-center py-4 px-4 text-white font-semibold">✅ Да</td>
                  <td className="text-center py-4 px-4 text-gray-300">❌ Нет</td>
                  <td className="text-center py-4 px-4 text-gray-300">❌ Нет</td>
                  <td className="text-center py-4 px-4 text-gray-300">❌ Нет</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-4 text-white">Производительность</td>
                  <td className="text-center py-4 px-4 text-white font-semibold">400%</td>
                  <td className="text-center py-4 px-4 text-gray-300">100%</td>
                  <td className="text-center py-4 px-4 text-gray-300">95%</td>
                  <td className="text-center py-4 px-4 text-gray-300">90%</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-4 text-white">Точность решений</td>
                  <td className="text-center py-4 px-4 text-white font-semibold">95%</td>
                  <td className="text-center py-4 px-4 text-gray-300">85%</td>
                  <td className="text-center py-4 px-4 text-gray-300">80%</td>
                  <td className="text-center py-4 px-4 text-gray-300">75%</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white">Интеграция с системами</td>
                  <td className="text-center py-4 px-4 text-white font-semibold">✅ Универсальная</td>
                  <td className="text-center py-4 px-4 text-gray-300">⚠️ Ограниченная</td>
                  <td className="text-center py-4 px-4 text-gray-300">⚠️ Ограниченная</td>
                  <td className="text-center py-4 px-4 text-gray-300">⚠️ Ограниченная</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
