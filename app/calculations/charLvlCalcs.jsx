export const calculateCharLvlMats = (characterLevel) => {
    let expValue = 0;
    let localSpecialtyValue = 0;
    let TinyElementalCrystals = 0;
    let SmallElementalCrystals = 0;
    let MediumElementalCrystals = 0;
    let LargeElementalCrystals = 0;
    let Boss = 0;

    if (characterLevel === '20') {
        expValue = 5;
        localSpecialtyValue = 0;
        TinyElementalCrystals = 0;
        SmallElementalCrystals = 0;
        MediumElementalCrystals = 0;
        LargeElementalCrystals = 0;
        Boss = 0;
    } else if (characterLevel === '20/40') {
        expValue = 5;
        localSpecialtyValue = 3;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 0;
        MediumElementalCrystals = 0;
        LargeElementalCrystals = 0;
        Boss = 0;
    } else if (characterLevel === '40') {
        expValue = 34;
        localSpecialtyValue = 3;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 0;
        MediumElementalCrystals = 0;
        LargeElementalCrystals = 0;
        Boss = 0;
    } else if (characterLevel === '40/50') {
        expValue = 34;
        localSpecialtyValue = 13;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 3;
        MediumElementalCrystals = 0;
        LargeElementalCrystals = 0;
        Boss = 2;
    } else if (characterLevel === '50') {
        expValue = 64;
        localSpecialtyValue = 13;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 3;
        MediumElementalCrystals = 0;
        LargeElementalCrystals = 0;
        Boss = 2;
    } else if (characterLevel === '50/60') {
        expValue = 64;
        localSpecialtyValue = 33;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 9;
        MediumElementalCrystals = 0;
        LargeElementalCrystals = 0;
        Boss = 6;
    } else if (characterLevel === '60') {
        expValue = 106;
        localSpecialtyValue = 33;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 9;
        MediumElementalCrystals = 0;
        LargeElementalCrystals = 0;
        Boss = 6;
    } else if (characterLevel === '60/70') {
        expValue = 106;
        localSpecialtyValue = 63;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 9;
        MediumElementalCrystals = 3;
        LargeElementalCrystals = 0;
        Boss = 14;
    } else if (characterLevel === '70') {
        expValue = 166;
        localSpecialtyValue = 63;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 9;
        MediumElementalCrystals = 3;
        LargeElementalCrystals = 0;
        Boss = 14;
    } else if (characterLevel === '70/80') {
        expValue = 166;
        localSpecialtyValue = 108;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 9;
        MediumElementalCrystals = 9;
        LargeElementalCrystals = 0;
        Boss = 26;
    } else if (characterLevel === '80') {
        expValue = 247;
        localSpecialtyValue = 108;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 9;
        MediumElementalCrystals = 9;
        LargeElementalCrystals = 0;
        Boss = 26;
    } else if (characterLevel === '80/90') {
        expValue = 247;
        localSpecialtyValue = 168;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 9;
        MediumElementalCrystals = 9;
        LargeElementalCrystals = 6;
        Boss = 26;
    } else if (characterLevel === '90') {
        expValue = 419;
        localSpecialtyValue = 168;
        TinyElementalCrystals = 1;
        SmallElementalCrystals = 9;
        MediumElementalCrystals = 9;
        LargeElementalCrystals = 6;
        Boss = 26;
    }

    return {
        EXP: expValue.toString(),
        LocalSpecialty: localSpecialtyValue.toString(),
        TinyElementalCrystals: TinyElementalCrystals.toString(),
        SmallElementalCrystals: SmallElementalCrystals.toString(),
        MediumElementalCrystals: MediumElementalCrystals.toString(),
        LargeElementalCrystals: LargeElementalCrystals.toString(),
        Boss: Boss.toString(),
    };
};
