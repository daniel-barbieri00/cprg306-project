// mobMoraValues.js

export const mobMoraValues = {
    characterLevel: {
        '20': { mora: 119495, small: 3, medium: 0, large: 0},
        '20/40': { mora: 42470, small: 3, medium: 0, large: 0},
        '40': { mora: 155930, small: 3, medium: 0, large: 0},
        '40/50': { mora: 205190, small: 18, medium: 0, large: 0},
        '50': { mora: 312275, small: 18, medium: 0, large: 0},
        '50/60': { mora: 386370, small: 18, medium: 12, large: 0},
        '60': { mora: 543730, small: 18, medium: 12, large: 0},
        '60/70': { mora: 643905, small: 18, medium: 30, large: 0},
        '70': { mora: 863660, small: 18, medium: 30, large: 0},
        '70/80': { mora: 991295, small: 18, medium: 30, large: 12},
        '80': { mora: 1286905, small: 18, medium: 30, large: 12},
        '80/90': { mora: 1443540, small: 18, medium: 30, large: 36},
        '90': { mora: 2092530, small: 18, medium: 30, large: 36},
    },
    talentLevels: {
        '1': { mora: 0, small: 0, medium: 0, large: 0},
        '2': { mora: 12500, small: 6, medium: 0, large: 0 },
        '3': { mora: 30000, small: 6, medium: 3, large: 0 },
        '4': { mora: 55000, small: 6, medium: 7, large: 0},
        '5': { mora: 85000, small: 6, medium: 13, large: 0},
        '6': { mora: 122500, small: 6, medium: 22, large: 0},
        '7': { mora: 242500, small: 6, medium: 22, large: 4},
        '8': { mora: 502500, small: 6, medium: 22, large: 10},
        '9': { mora: 952500, small: 6, medium: 22, large: 19},
        '10': { mora: 1652500, small: 6, medium: 21, large: 31},
    },
};

export const calculateTalentMoraMobDrops = (talentLevels) => {
    // Calculate the total Mora, Small Mob Drops, Medium Mob Drops, and Large Mob Drops for the selected talent levels
    const totalMora = talentLevels.reduce((acc, level) => acc + mobMoraValues.talentLevels[level].mora, 0);
    const totalSmallMobDrops = talentLevels.reduce((acc, level) => acc + mobMoraValues.talentLevels[level].small, 0);
    const totalMediumMobDrops = talentLevels.reduce((acc, level) => acc + mobMoraValues.talentLevels[level].medium, 0);
    const totalLargeMobDrops = talentLevels.reduce((acc, level) => acc + mobMoraValues.talentLevels[level].large, 0);

    return { totalMora, totalSmallMobDrops, totalMediumMobDrops, totalLargeMobDrops };
};