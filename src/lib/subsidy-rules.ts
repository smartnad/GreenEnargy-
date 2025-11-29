export interface SubsidyRules {
    tier1_limit: number; // 2 kW
    tier1_rate: number; // 30000 per kW
    tier2_limit: number; // 3 kW (so next 1 kW)
    tier2_rate: number; // 18000 per kW
    max_subsidy: number; // 78000
    last_updated: string;
    source: string;
}

export const DEFAULT_RULES: SubsidyRules = {
    tier1_limit: 2,
    tier1_rate: 30000,
    tier2_limit: 3,
    tier2_rate: 18000,
    max_subsidy: 78000,
    last_updated: '2025-11-29',
    source: 'https://pmsuryaghar.gov.in'
};

export async function fetchSubsidyRules(): Promise<SubsidyRules> {
    // In a real app, fetch from Supabase or an Edge Function
    // const { data } = await supabase.from('settings').select('subsidy_rules').single();
    // return data?.subsidy_rules || DEFAULT_RULES;

    return new Promise((resolve) => {
        setTimeout(() => resolve(DEFAULT_RULES), 500);
    });
}

export function calculateSubsidy(systemSizeKw: number, rules: SubsidyRules) {
    let subsidy = 0;

    if (systemSizeKw <= 0) return 0;

    // First 2 kW
    const tier1Kw = Math.min(systemSizeKw, rules.tier1_limit);
    subsidy += tier1Kw * rules.tier1_rate;

    // Next 1 kW (from 2 to 3)
    if (systemSizeKw > rules.tier1_limit) {
        const remaining = systemSizeKw - rules.tier1_limit;
        const tier2Kw = Math.min(remaining, rules.tier2_limit - rules.tier1_limit);
        subsidy += tier2Kw * rules.tier2_rate;
    }

    // Cap at max_subsidy (though the math above naturally caps at 2*30 + 1*18 = 78k for 3kW)
    // For > 3kW, the loop above stops adding, so it stays at 78k.
    // But let's ensure we handle edge cases.

    return Math.min(subsidy, rules.max_subsidy);
}
