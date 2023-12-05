"use client";

import React, { useState } from 'react';
import { calculateCharLvlMats } from './calculations/charLvlCalcs';
import { calculateTalentLvlMats } from './calculations/talentLvlCalcs';

const Calculator = () => {
    const [character, setCharacter] = useState('Albedo'); // or another default value
    const [characterLevel, setCharacterLevel] = useState('20');
    const [normalAttackLevel, setNormalAttackLevel] = useState('1');
    const [elementalSkillLevel, setElementalSkillLevel] = useState('1');
    const [elementalBurstLevel, setElementalBurstLevel] = useState('1');
    const [result, setResult] = useState('');
    const [results, setResults] = useState({
        EXP: '',
        Mora: '',
        LocalSpecialty: '',
        Boss: '',
        WeeklyBoss: '',
        MobDrops: '',
        TinyElementalCrystals: '',
        SmallElementalCrystals: '',
        MediumElementalCrystals: '',
        LargeElementalCrystals: '',
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

        setResult(`Collect materials for talent levels: Normal/Charged/Plunge - ${normalAttackLevel}, Elemental Skill - ${elementalSkillLevel}, Elemental Burst - ${elementalBurstLevel}`);
        setResults({
            EXP,
            Mora: '', // You can add Mora calculation logic here
            LocalSpecialty,
            Boss: Boss.toString(),
            WeeklyBoss: WeeklyBoss.toString(),  // Include the Weekly Boss calculation
            MobDrops: '', // You can add Mob Drops calculation logic here
            TinyElementalCrystals: TinyElementalCrystals.toString(),
            SmallElementalCrystals: SmallElementalCrystals.toString(),
            MediumElementalCrystals: MediumElementalCrystals.toString(),
            LargeElementalCrystals: LargeElementalCrystals.toString(),
            SmallTalentBooks: SmallTalentBooks.toString(),  // Include the Small Talent Books calculation
            MediumTalentBooks: MediumTalentBooks.toString(),  // Include the Medium Talent Books calculation
            LargeTalentBooks: LargeTalentBooks.toString(),  // Include the Large Talent Books calculation
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
                            <strong>{label}:</strong> {value}
                        </div>
                    ))}
                </div>
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
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
};

const resultBoxStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    color: "black",
};