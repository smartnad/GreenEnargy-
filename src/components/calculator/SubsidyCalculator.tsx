'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, IndianRupee, Sun, Zap, Info, FileText, Loader2 } from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'
import { fetchSubsidyRules, calculateSubsidy, type SubsidyRules, DEFAULT_RULES } from '@/lib/subsidy-rules'

export default function SubsidyCalculator() {
    const [bill, setBill] = useState<number>(2500)
    const [tariff, setTariff] = useState<number>(7.5)
    const [marketRate, setMarketRate] = useState<number>(55000) // Lowered slightly per market trends
    const [customKw, setCustomKw] = useState<number | null>(null)
    const [rules, setRules] = useState<SubsidyRules>(DEFAULT_RULES)
    const [loading, setLoading] = useState(true)

    const [results, setResults] = useState({
        recommendedKw: 0,
        totalCost: 0,
        subsidyAmount: 0,
        netCost: 0,
        monthlySavings: 0,
        paybackPeriod: 0,
    })

    useEffect(() => {
        fetchSubsidyRules().then(data => {
            setRules(data)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        // 1. Calculate Recommended kW
        const monthlyKWh = bill / tariff
        const annualKWh = monthlyKWh * 12
        // 1400 kWh/kW/year is a safe average for India
        let recKw = parseFloat((annualKWh / 1400).toFixed(2))

        // Clamp
        if (recKw < 1) recKw = 1
        if (recKw > 10) recKw = 10

        const finalKw = customKw || recKw

        // 2. Calculate Costs
        const totalCost = finalKw * marketRate

        // 3. Calculate Subsidy (PM Surya Ghar)
        const subsidyAmount = calculateSubsidy(finalKw, rules)

        const netCost = totalCost - subsidyAmount

        // 4. Savings & Payback
        // Assume 80% bill reduction (conservative)
        const monthlySavings = bill * 0.85
        const paybackMonths = netCost / monthlySavings
        const paybackYears = paybackMonths / 12

        setResults({
            recommendedKw: finalKw,
            totalCost,
            subsidyAmount,
            netCost,
            monthlySavings,
            paybackPeriod: paybackYears
        })

    }, [bill, tariff, marketRate, customKw, rules])

    return (
        <div className="w-full max-w-5xl mx-auto p-1 bg-gradient-to-br from-saffron/20 via-white to-india-green/20 rounded-3xl shadow-2xl">
            <div className="bg-white dark:bg-neutral-900 rounded-[22px] p-6 md:p-10 backdrop-blur-xl border border-white/50 dark:border-white/10">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-saffron/10 rounded-2xl text-saffron shadow-inner">
                            <Calculator className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                                Subsidy Calculator
                            </h2>
                            <p className="text-sm text-neutral-500 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                PM Surya Ghar Compliant • Updated {rules.last_updated}
                            </p>
                        </div>
                    </div>

                    <div className="px-4 py-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-100 dark:border-neutral-700 text-xs text-neutral-500 max-w-xs">
                        <strong>Official Rule:</strong> ₹30k/kW up to 2kW, ₹18k/kW for next 1kW. Max ₹78,000.
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Inputs */}
                    <div className="lg:col-span-5 space-y-8">
                        <InputGroup
                            label="Monthly Electricity Bill"
                            icon={<IndianRupee className="w-4 h-4" />}
                            value={bill}
                            onChange={setBill}
                            min={500}
                            max={50000}
                            step={100}
                        />

                        <div className="grid grid-cols-2 gap-6">
                            <InputGroup
                                label="Tariff (₹/kWh)"
                                value={tariff}
                                onChange={setTariff}
                                step={0.1}
                            />
                            <InputGroup
                                label="Market Rate (₹/kW)"
                                value={marketRate}
                                onChange={setMarketRate}
                                step={1000}
                            />
                        </div>

                        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
                            <label className="block text-sm font-medium mb-3 text-neutral-600 dark:text-neutral-400">
                                System Size (kW)
                            </label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="0.5"
                                    value={customKw || results.recommendedKw}
                                    onChange={(e) => setCustomKw(Number(e.target.value))}
                                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-saffron"
                                />
                                <div className="w-20 px-3 py-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 text-center font-bold">
                                    {customKw || results.recommendedKw}
                                </div>
                            </div>
                            <p className="text-xs text-neutral-400 mt-2">
                                Recommended: {results.recommendedKw} kW based on your bill.
                            </p>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-7">
                        <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-8 border border-neutral-100 dark:border-neutral-700 relative overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-saffron/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm text-neutral-500 mb-1">Total Project Cost</p>
                                        <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                                            {formatCurrency(results.totalCost)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-500 mb-1 flex items-center gap-2">
                                            Govt. Subsidy <Info className="w-3 h-3" />
                                        </p>
                                        <p className="text-3xl font-bold text-india-green">
                                            - {formatCurrency(results.subsidyAmount)}
                                        </p>
                                        <p className="text-xs text-neutral-400 mt-1">
                                            Direct to your bank account
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                        <p className="text-sm text-neutral-500 mb-1">Net Cost to You</p>
                                        <p className="text-4xl font-bold text-neutral-900 dark:text-white">
                                            {formatCurrency(results.netCost)}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <ResultCard
                                        icon={<Zap className="text-yellow-500" />}
                                        label="Monthly Savings"
                                        value={formatCurrency(results.monthlySavings)}
                                    />
                                    <ResultCard
                                        icon={<Sun className="text-orange-500" />}
                                        label="ROI / Payback"
                                        value={`${results.paybackPeriod.toFixed(1)} Years`}
                                    />
                                    <ResultCard
                                        icon={<FileText className="text-blue-500" />}
                                        label="CO2 Saved"
                                        value="~4 Tons/yr"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-neutral-900 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                    Check Eligibility & Apply
                                </button>
                                <button className="px-6 py-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                                    Download Report
                                </button>
                            </div>

                            <p className="text-[10px] text-center text-neutral-400 mt-6">
                                *Disclaimer: Estimates based on PM Surya Ghar rules as of {rules.last_updated}. Final subsidy subject to DISCOM approval and technical feasibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InputGroup({ label, icon, value, onChange, min, max, step }: any) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">
                {label}
            </label>
            <div className="relative group">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-saffron transition-colors">
                        {icon}
                    </div>
                )}
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    min={min}
                    max={max}
                    step={step}
                    className={cn(
                        "w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl py-3 outline-none focus:ring-2 focus:ring-saffron transition-all font-semibold text-neutral-900 dark:text-white",
                        icon ? "pl-10 pr-4" : "px-4"
                    )}
                />
            </div>
        </div>
    )
}

function ResultCard({ icon, label, value }: any) {
    return (
        <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 flex items-center gap-4 shadow-sm">
            <div className="p-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                {icon}
            </div>
            <div>
                <p className="text-xs text-neutral-500">{label}</p>
                <p className="text-lg font-bold text-neutral-900 dark:text-white">{value}</p>
            </div>
        </div>
    )
}
