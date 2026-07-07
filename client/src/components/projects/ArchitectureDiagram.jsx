import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

export default function ArchitectureDiagram({ steps }) {
  return (
    <div className="flex flex-col items-stretch gap-2">
      {steps.map((step, i) => (
        <div key={step.name} className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between gap-4"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-highlight shrink-0">{step.name}</span>
            <span className="text-white/60 text-sm text-right">{step.detail}</span>
          </motion.div>
          {i < steps.length - 1 && <FiArrowDown className="text-white/25" size={14} />}
        </div>
      ))}
    </div>
  )
}
