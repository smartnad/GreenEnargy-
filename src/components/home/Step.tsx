'use client'

import { motion } from 'framer-motion'

export default function Step({ number, title, desc }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
        >
            <div className="text-4xl font-bold text-neutral-700 opacity-50">{number}</div>
            <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-neutral-400">{desc}</p>
            </div>
        </motion.div>
    )
}
