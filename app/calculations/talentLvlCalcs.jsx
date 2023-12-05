// Logic for result of weekly boss and talent books
export const calculateTalentLvlMats = (normalAttackLevel, elementalSkillLevel, elementalBurstLevel) => {
    const calculateSingleTalent = (talentLevel) => {
        let bossValue = 0;
        let smallTalentBooksValue = 0;
        let mediumTalentBooksValue = 0;
        let largeTalentBooksValue = 0;

        // Define your logic for weekly boss and talent books here
        // Adjust the values based on your requirements

        if (talentLevel === '1') {
            bossValue = 0;
            smallTalentBooksValue = 0;
            mediumTalentBooksValue = 0;
            largeTalentBooksValue = 0;
        } else if (talentLevel === '2') {
            bossValue = 0;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 0;
            largeTalentBooksValue = 0;
        } else if (talentLevel === '3') {
            bossValue = 0;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 2;
            largeTalentBooksValue = 0;
        } else if (talentLevel === '4') {
            bossValue = 0;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 6;
            largeTalentBooksValue = 0;
        } else if (talentLevel === '5') {
            bossValue = 0;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 12;
            largeTalentBooksValue = 0;
        } else if (talentLevel === '6') {
            bossValue = 0;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 21;
            largeTalentBooksValue = 0;
        } else if (talentLevel === '7') {
            bossValue = 1;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 21;
            largeTalentBooksValue = 4;
        } else if (talentLevel === '8') {
            bossValue = 2;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 21;
            largeTalentBooksValue = 10;
        } else if (talentLevel === '9') {
            bossValue = 4;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 21;
            largeTalentBooksValue = 22;
        } else if (talentLevel === '10') {
            bossValue = 6;
            smallTalentBooksValue = 3;
            mediumTalentBooksValue = 21;
            largeTalentBooksValue = 38;
        }

        return {
            WeeklyBoss: bossValue,
            SmallTalentBooks: smallTalentBooksValue,
            MediumTalentBooks: mediumTalentBooksValue,
            LargeTalentBooks: largeTalentBooksValue,
        };
    };

    const normalAttackResults = calculateSingleTalent(normalAttackLevel);
    const elementalSkillResults = calculateSingleTalent(elementalSkillLevel);
    const elementalBurstResults = calculateSingleTalent(elementalBurstLevel);

    // Combine the results for all talents
    return {
        WeeklyBoss: normalAttackResults.WeeklyBoss + elementalSkillResults.WeeklyBoss + elementalBurstResults.WeeklyBoss,
        SmallTalentBooks: normalAttackResults.SmallTalentBooks + elementalSkillResults.SmallTalentBooks + elementalBurstResults.SmallTalentBooks,
        MediumTalentBooks: normalAttackResults.MediumTalentBooks + elementalSkillResults.MediumTalentBooks + elementalBurstResults.MediumTalentBooks,
        LargeTalentBooks: normalAttackResults.LargeTalentBooks + elementalSkillResults.LargeTalentBooks + elementalBurstResults.LargeTalentBooks,
    };
};
