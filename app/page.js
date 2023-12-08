"use client";

import React, { useState } from 'react';
import { calculateCharLvlMats } from './calculations/charLvlCalcs';
import { calculateTalentLvlMats } from './calculations/talentLvlCalcs';
import { mobMoraValues, calculateTalentMoraMobDrops } from './calculations/mobMoraCalcs';

const Calculator = () => {
    const [character, setCharacter] = useState('Albedo'); // or another default value
    const [characterLevel, setCharacterLevel] = useState('20');
    const [normalAttackLevel, setNormalAttackLevel] = useState('1');
    const [elementalSkillLevel, setElementalSkillLevel] = useState('1');
    const [elementalBurstLevel, setElementalBurstLevel] = useState('1');
    const [result, setResult] = useState('');
    const [results, setResults] = useState({

    });

    const characterOptions = [
        'Albedo', 'Alhaitham', 'Aloy', 'Amber', 'Anemo Traveler',
        'Ayaka (Kamisato)', 'Ayato (Kamisato)',
        'Baizhu', 'Barbara', 'Beidou', 'Bennett',
        'Candace', 'Childe', 'Chongyun', 'Collei', 'Cyno',
        'Dehya', 'Dendro Traveler', 'Diluc', 'Diona', 'Dori',
        'Electro Traveler', 'Eula', 'Faruzan', 'Fischl', 'Freminet',
        'Ganyu', 'Geo Traveler', 'Gorou', 'Heizou (Shikanoin)',
        'Hu Tao', 'Hydro Traveler', 'Itto', 'Jean',
        'Kaeya', 'Kaveh', 'Kazuha', 'Kirara', 'Klee',
        'Kokomi', 'Kujou Sara', 'Kuki Shinobu', 'Layla', 'Lisa',
        'Lynette', 'Lyney', 'Mika', 'Mona',
        'Nahida', 'Neuvillette', 'Nilou', 'Ningguang', 'Noelle',
        'Qiqi', 'Raiden Shogun', 'Razor', 'Rosaria',
        'Sayu', 'Shenhe', 'Sucrose',
        'Thoma', 'Tighnari', 'Venti', 'Wanderer', 'Wriosthesley',
        'Xiangling', 'Xiao', 'Xingqiu', 'Xinyan',
        'Yae Miko', 'Yanfei', 'Yaoyao', 'Yelan', 'Yoimiya', 'Yun jin',
        'Zhongli',
    ];

    const characterLevelOptions = [
        '20',
        '20/40',
        '40',
        '40/50',
        '50',
        '50/60',
        '60',
        '60/70',
        '70',
        '70/80',
        '80',
        '80/90',
        '90',
    ];

    const formatCategory = (category) => {
        return category
            .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between lowercase and uppercase letters
            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Add space between consecutive uppercase letters
    };

    const talentLevelOptions = Array.from({ length: 10 }, (_, index) => (index + 1).toString());

    const calculateMaterials = () => {
        // Use the new calculation function for talent levels
        const {
            EXP,
            LocalSpecialty,
            TinyElementalCrystals,
            SmallElementalCrystals,
            MediumElementalCrystals,
            LargeElementalCrystals,
            Boss,
        } = calculateCharLvlMats(characterLevel);

        // Use the new calculation function for talent books
        const {
            WeeklyBoss,
            SmallTalentBooks,
            MediumTalentBooks,
            LargeTalentBooks,
        } = calculateTalentLvlMats(normalAttackLevel, elementalSkillLevel, elementalBurstLevel);

        //calculate mora and mob drops
        const talentLevels = [normalAttackLevel, elementalSkillLevel, elementalBurstLevel];
        const { totalMora, totalSmallMobDrops, totalMediumMobDrops, totalLargeMobDrops } = calculateTalentMoraMobDrops(talentLevels);


        setResult(`Collect materials for talent levels: Normal/Charged/Plunge - ${normalAttackLevel}, Elemental Skill - ${elementalSkillLevel}, Elemental Burst - ${elementalBurstLevel}`);
        setResults({
            EXP,
            Mora: totalMora.toString(),
            LocalSpecialty,
            Boss: Boss.toString(),
            WeeklyBoss: WeeklyBoss.toString(),
            TinyElementalCrystals: TinyElementalCrystals.toString(),
            SmallElementalCrystals: SmallElementalCrystals.toString(),
            MediumElementalCrystals: MediumElementalCrystals.toString(),
            LargeElementalCrystals: LargeElementalCrystals.toString(),
            SmallTalentBooks: SmallTalentBooks.toString(),
            MediumTalentBooks: MediumTalentBooks.toString(),
            LargeTalentBooks: LargeTalentBooks.toString(),
            SmallMobDrops: totalSmallMobDrops.toString(),
            MediumMobDrops: totalMediumMobDrops.toString(),
            LargeMobDrops: totalLargeMobDrops.toString(),
        });
    };

    return (
        <div style={containerStyle}>
            <h2>Genshin Impact Calculator</h2>
            <div style={formStyle}>
                <label htmlFor="character" style={labelStyle}>
                    Character:
                </label>
                <select
                    id="character"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    style={inputStyle}
                >
                    {characterOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <label htmlFor="characterLevel" style={labelStyle}>
                    Character Level:
                </label>
                <select
                    id="characterLevel"
                    value={characterLevel}
                    onChange={(e) => setCharacterLevel(e.target.value)}
                    style={inputStyle}
                >
                    {characterLevelOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <label htmlFor="talentLevels" style={labelStyle}>
                    Talent Levels:
                </label>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <select
                        id="normalAttackLevel"
                        value={normalAttackLevel}
                        onChange={(e) => setNormalAttackLevel(e.target.value)}
                        style={{ ...inputStyle, flex: '1', marginRight: '5px' }}
                    >
                        {talentLevelOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        id="elementalSkillLevel"
                        value={elementalSkillLevel}
                        onChange={(e) => setElementalSkillLevel(e.target.value)}
                        style={{ ...inputStyle, flex: '1', marginRight: '5px' }}
                    >
                        {talentLevelOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        id="elementalBurstLevel"
                        value={elementalBurstLevel}
                        onChange={(e) => setElementalBurstLevel(e.target.value)}
                        style={{ ...inputStyle, flex: '1' }}
                    >
                        {talentLevelOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <button onClick={calculateMaterials} style={buttonStyle}>
                    Calculate Materials
                </button>
                <div style={resultsStyle}>
                    {Object.entries(results).map(([label, value]) => (
                        <div key={label} style={resultBoxStyle}>
                            <strong>{formatCategory(label)}:</strong> {value}
                        </div>
                    ))}
                </div>
            </div>

            <div style={instructionsContainerStyle}>
                <h2>How to Use</h2>
                <p>Assume starting character level is 1 with talent levels 1, 1, 1</p>
                <p>1. Pick a Character you are Leveling</p>
                <p>2. Choose the level you are going to level the character up to</p>
                <p>3. Choose the level you are going to get each different talent too.</p>
                <p>4. Press calculate, and results will display for how much of each material you need to collect</p>
            </div>

        </div>
            );
};

export default Calculator;

const containerStyle = {
    width: '80%', // Adjust the width as needed
    margin: '20px auto',
    padding: '20px',
    border: '2px solid #ccc', // Increase the border size
    borderRadius: '10px',
    textAlign: 'center', // Center the content
    backgroundColor: '#575757'
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const labelStyle = {
    marginBottom: '5px',
};

const inputStyle = {
    marginBottom: '10px',
    padding: '5px',
    color: 'black',
};

const buttonStyle = {
    padding: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
};

const resultContainerStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const resultsStyle = {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
};

const resultBoxStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    color: "black",
    textAlign: 'center'
};

const instructionsContainerStyle = {
    width: '80%',
    margin: '20px auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#575757',
    marginTop: '20px', // Adjust the margin as needed
};
