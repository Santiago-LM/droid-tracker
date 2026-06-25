const cyclesManifest = {
        1: [
            { milestone: "0 → 1", credits: "10K", numericCost: 10000, droids: [{ material: "Basic", family: "CB", rarity: "Common" }, { material: "Basic", family: "PIT", rarity: "Common" }, { material: "Basic", family: "DRK-1 PROBE", rarity: "Common" }] },
            { milestone: "1 → 2", credits: "150K", numericCost: 150000, droids: [{ material: "Basic", family: "BDX EXPLORER", rarity: "Rare" }, { material: "Basic", family: "2BB", rarity: "Rare" }, { material: "Basic", family: "BAL-CORE", rarity: "Rare" }] },
            { milestone: "2 → 3", credits: "975K", numericCost: 975000, droids: [{ material: "Basic", family: "A-LT", rarity: "Common" }, { material: "Basic", family: "BU-4D", rarity: "Common" }, { material: "Gold", family: "R9", rarity: "Rare" }] },
            { milestone: "3 → 4", credits: "2.95M", numericCost: 2950000, droids: [{ material: "Gold", family: "ARG", rarity: "Rare" }, { material: "Gold", family: "B1 SECURITY", rarity: "Rare" }, { material: "Basic", family: "GROUNDMECH", rarity: "Epic" }] },
            { milestone: "4 → 5", credits: "5.35M", numericCost: 5350000, droids: [{ material: "Gold", family: "BU-4D", rarity: "Common" }, { material: "Gold", family: "HOV-R", rarity: "Rare" }, { material: "Diamond", family: "R9", rarity: "Rare" }] },
            { milestone: "5 → 6", credits: "9.85M", numericCost: 9850000, droids: [{ material: "Gold", family: "GROUNDMECH", rarity: "Epic" }, { material: "Diamond", family: "ARG", rarity: "Rare" }, { material: "Diamond", family: "A-LT", rarity: "Common" }] },
            { milestone: "6 → 7", credits: "14.5M", numericCost: 14500000, droids: [{ material: "Gold", family: "BB", rarity: "Common" }, { material: "Diamond", family: "B1 SECURITY", rarity: "Rare" }, { material: "Diamond", family: "BU-4D", rarity: "Common" }] },
            { milestone: "7 → 8", credits: "36M", numericCost: 36000000, droids: [{ material: "Gold", family: "UTIL-TEC", rarity: "Epic" }, { material: "Gold", family: "LO", rarity: "Epic" }, { material: "Diamond", family: "HOV-R", rarity: "Rare" }] },
            { milestone: "8 → 9", credits: "89M", numericCost: 89000000, droids: [{ material: "Rainbow", family: "GROUNDMECH", rarity: "Epic" }, { material: "Gold", family: "R6", rarity: "Epic" }, { material: "Gold", family: "TRAK-R", rarity: "Epic" }] },
            { milestone: "9 → 10", credits: "220M", numericCost: 220000000, droids: [{ material: "Rainbow", family: "LO", rarity: "Epic" }, { material: "Rainbow", family: "HAUL-R", rarity: "Epic" }, { material: "Gold", family: "STRIKE-ORB", rarity: "Epic" }] },
            { milestone: "10 → 11", credits: "550M", numericCost: 550000000, droids: [{ material: "Rainbow", family: "AMP WALKER", rarity: "Epic" }, { material: "Rainbow", family: "B1 HEAVY", rarity: "Epic" }, { material: "Basic", family: "BB9", rarity: "Legendary" }] },
            { milestone: "11 → 12", credits: "1.36B", numericCost: 1360000000, droids: [{ material: "Gold", family: "PROTO-ROLLER", rarity: "Legendary" }, { material: "Basic", family: "MECHA-DROID", rarity: "Legendary" }, { material: "Basic", family: "MONO-WALKER", rarity: "Legendary" }] },
            { milestone: "12 → 13", credits: "3.40B", numericCost: 3400000000, droids: [{ material: "Basic", family: "R7", rarity: "Legendary" }, { material: "Basic", family: "CYCLO-GRAV", rarity: "Legendary" }, { material: "Basic", family: "B2-RP", rarity: "Legendary" }] },
            { milestone: "13 → 14", credits: "8.45B", numericCost: 8450000000, droids: [{ material: "Basic", family: "OPTI-STRIKE", rarity: "Legendary" }, { material: "Gold", family: "MONO-WALKER", rarity: "Legendary" }, { material: "Gold", family: "MECHA-DROID", rarity: "Legendary" }] },
            { milestone: "14 → 15", credits: "21.00B", numericCost: 21000000000, droids: [{ material: "Gold", family: "B2-RP", rarity: "Legendary" }, { material: "Gold", family: "BB9", rarity: "Legendary" }, { material: "Gold", family: "R7", rarity: "Legendary" }] },
            { milestone: "15 → 16", credits: "52.00B", numericCost: 52000000000, droids: [{ material: "Gold", family: "OPTI-STRIKE", rarity: "Legendary" }, { material: "Diamond", family: "MONO-WALKER", rarity: "Legendary" }, { material: "Diamond", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "16 → 17", credits: "130.00B", numericCost: 130000000000, droids: [{ material: "Diamond", family: "B2-RP", rarity: "Legendary" }, { material: "Diamond", family: "CYCLO-GRAV", rarity: "Legendary" }, { material: "Diamond", family: "MECHA-DROID", rarity: "Legendary" }] },
            { milestone: "17 → 18", credits: "325.00B", numericCost: 325000000000, droids: [{ material: "Diamond", family: "BB9", rarity: "Legendary" }, { material: "Diamond", family: "R7", rarity: "Legendary" }, { material: "Rainbow", family: "MONO-WALKER", rarity: "Legendary" }] },
            { milestone: "18 → 19", credits: "810.00B", numericCost: 810000000000, droids: [{ material: "Rainbow", family: "B2-RP", rarity: "Legendary" }, { material: "Rainbow", family: "CYCLO-GRAV", rarity: "Legendary" }, { material: "Rainbow", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "19 → 20", credits: "2.00T", numericCost: 2000000000000, droids: [{ material: "Rainbow", family: "R7", rarity: "Legendary" }, { material: "Rainbow", family: "OPTI-STRIKE", rarity: "Legendary" }, { material: "Rainbow", family: "MECHA-DROID", rarity: "Legendary" }] },
            { milestone: "20 → 21", credits: "3.00T", numericCost: 3000000000000, droids: [{ material: "Beskar", family: "BB", rarity: "Common" }, { material: "Beskar", family: "ORB-WALKER", rarity: "Epic" }, { material: "Beskar", family: "GROUNDMECH", rarity: "Epic" }] },
            { milestone: "21 → 22", credits: "4.50T", numericCost: 4500000000000, droids: [{ material: "Beskar", family: "AMP WALKER", rarity: "Epic" }, { material: "Beskar", family: "B1 HEAVY", rarity: "Epic" }, { material: "Beskar", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "22 → 23", credits: "6.00T", numericCost: 6000000000000, droids: [{ material: "Beskar", family: "OPTI-STRIKE", rarity: "Legendary" }, { material: "Beskar", family: "MONO-WALKER", rarity: "Legendary" }, { material: "Beskar", family: "R7", rarity: "Legendary" }] }
        ],
        2: [
            { milestone: "0 → 1", credits: "10K", numericCost: 10000, droids: [{ material: "Basic", family: "ID10", rarity: "Common" }, { material: "Basic", family: "MOUSE", rarity: "Common" }, { material: "Basic", family: "GONK", rarity: "Common" }] },
            { milestone: "1 → 2", credits: "150K", numericCost: 150000, droids: [{ material: "Basic", family: "ROLL-R", rarity: "Rare" }, { material: "Basic", family: "SENATE HOVERCAM", rarity: "Rare" }, { material: "Basic", family: "NAV-EX", rarity: "Rare" }] },
            { milestone: "2 → 3", credits: "975K", numericCost: 975000, droids: [{ material: "Basic", family: "R4", rarity: "Rare" }, { material: "Basic", family: "VECT-ARM", rarity: "Common" }, { material: "Gold", family: "BDX EXPLORER", rarity: "Rare" }] },
            { milestone: "3 → 4", credits: "2.95M", numericCost: 2950000, droids: [{ material: "Gold", family: "2BB", rarity: "Rare" }, { material: "Gold", family: "BAL-CORE", rarity: "Rare" }, { material: "Basic", family: "ORB-WALKER", rarity: "Epic" }] },
            { milestone: "4 → 5", credits: "5.35M", numericCost: 5350000, droids: [{ material: "Gold", family: "R4", rarity: "Rare" }, { material: "Gold", family: "VECT-ARM", rarity: "Common" }, { material: "Gold", family: "NAV-EX", rarity: "Rare" }] },
            { milestone: "5 → 6", credits: "9.85M", numericCost: 9850000, droids: [{ material: "Basic", family: "GUNRUNNER", rarity: "Epic" }, { material: "Diamond", family: "2BB", rarity: "Rare" }, { material: "Diamond", family: "BAL-CORE", rarity: "Rare" }] },
            { milestone: "6 → 7", credits: "14.5M", numericCost: 14500000, droids: [{ material: "Diamond", family: "ROLL-R", rarity: "Rare" }, { material: "Diamond", family: "BDX EXPLORER", rarity: "Rare" }, { material: "Gold", family: "R2", rarity: "Common" }] },
            { milestone: "7 → 8", credits: "36M", numericCost: 36000000, droids: [{ material: "Diamond", family: "R4", rarity: "Rare" }, { material: "Gold", family: "B2 SUPER", rarity: "Epic" }, { material: "Gold", family: "GUNRUNNER", rarity: "Epic" }] },
            { milestone: "8 → 9", credits: "89M", numericCost: 89000000, droids: [{ material: "Rainbow", family: "NAV-EX", rarity: "Rare" }, { material: "Gold", family: "STRIKE-ORB", rarity: "Epic" }, { material: "Gold", family: "AMP WALKER", rarity: "Epic" }] },
            { milestone: "9 → 10", credits: "220M", numericCost: 220000000, droids: [{ material: "Rainbow", family: "VECT-ARM", rarity: "Common" }, { material: "Diamond", family: "R2", rarity: "Common" }, { material: "Diamond", family: "B2 SUPER", rarity: "Epic" }] },
            { milestone: "10 → 11", credits: "550M", numericCost: 550000000, droids: [{ material: "Diamond", family: "STRIKE-ORB", rarity: "Epic" }, { material: "Diamond", family: "B2 HEAVY", rarity: "Epic" }, { material: "Rainbow", family: "BAL-CORE", rarity: "Rare" }] },
            { milestone: "11 → 12", credits: "1.36B", numericCost: 1360000000, droids: [{ material: "Rainbow", family: "ORB-WALKER", rarity: "Epic" }, { material: "Rainbow", family: "R2", rarity: "Common" }, { material: "Basic", family: "BB9", rarity: "Legendary" }] },
            { milestone: "12 → 13", credits: "3.40B", numericCost: 3400000000, droids: [{ material: "Rainbow", family: "B2 SUPER", rarity: "Epic" }, { material: "Basic", family: "MECHA-DROID", rarity: "Legendary" }, { material: "Basic", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "13 → 14", credits: "8.45B", numericCost: 8450000000, droids: [{ material: "Rainbow", family: "B2 HEAVY", rarity: "Epic" }, { material: "Basic", family: "B2-RP", rarity: "Legendary" }, { material: "Gold", family: "R7", rarity: "Legendary" }] },
            { milestone: "14 → 15", credits: "21.00B", numericCost: 21000000000, droids: [{ material: "Rainbow", family: "STRIKE-ORB", rarity: "Epic" }, { material: "Gold", family: "BB9", rarity: "Legendary" }, { material: "Gold", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "15 → 16", credits: "52.00B", numericCost: 52000000000, droids: [{ material: "Diamond", family: "B2-RP", rarity: "Legendary" }, { material: "Rainbow", family: "AMP WALKER", rarity: "Epic" }, { material: "Gold", family: "MECHA-DROID", rarity: "Legendary" }] },
            { milestone: "16 → 17", credits: "130.00B", numericCost: 130000000000, droids: [{ material: "Rainbow", family: "OPTI-POD", rarity: "Epic" }, { material: "Diamond", family: "R7", rarity: "Legendary" }, { material: "Gold", family: "MONO-WALKER", rarity: "Legendary" }] },
            { milestone: "17 → 18", credits: "325.00B", numericCost: 325000000000, droids: [{ material: "Rainbow", family: "UTIL-TEC", rarity: "Epic" }, { material: "Diamond", family: "BB9", rarity: "Legendary" }, { material: "Diamond", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "18 → 19", credits: "810.00B", numericCost: 810000000000, droids: [{ material: "Diamond", family: "MECHA-DROID", rarity: "Legendary" }, { material: "Rainbow", family: "R7", rarity: "Legendary" }, { material: "Rainbow", family: "B2-RP", rarity: "Legendary" }] },
            { milestone: "19 → 20", credits: "2.00T", numericCost: 2000000000000, droids: [{ material: "Rainbow", family: "MONO-WALKER", rarity: "Legendary" }, { material: "Rainbow", family: "OPTI-STRIKE", rarity: "Legendary" }, { material: "Rainbow", family: "CYCLO-GRAV", rarity: "Legendary" }] },
            { milestone: "20 → 21", credits: "3.00T", numericCost: 3000000000000, droids: [{ material: "Beskar", family: "LO", rarity: "Epic" }, { material: "Beskar", family: "R6", rarity: "Epic" }, { material: "Beskar", family: "HAUL-R", rarity: "Epic" }] },
            { milestone: "21 → 22", credits: "4.50T", numericCost: 4500000000000, droids: [{ material: "Beskar", family: "SEN-TRI", rarity: "Epic" }, { material: "Beskar", family: "STRIKE-ORB", rarity: "Epic" }, { material: "Beskar", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "22 → 23", credits: "6.00T", numericCost: 6000000000000, droids: [{ material: "Beskar", family: "BB9", rarity: "Legendary" }, { material: "Beskar", family: "CYCLO-GRAV", rarity: "Legendary" }, { material: "Beskar", family: "B2-RP", rarity: "Legendary" }] }
        ],
        3: [
            { milestone: "0 → 1", credits: "10K", numericCost: 10000, droids: [{ material: "Basic", family: "MOUSE", rarity: "Common" }, { material: "Basic", family: "PIT", rarity: "Common" }, { material: "Basic", family: "GONK", rarity: "Common" }] },
            { milestone: "1 → 2", credits: "150K", numericCost: 150000, droids: [{ material: "Basic", family: "2BB", rarity: "Rare" }, { material: "Basic", family: "R3", rarity: "Common" }, { material: "Basic", family: "SENATE HOVERCAM", rarity: "Rare" }] },
            { milestone: "2 → 3", credits: "975K", numericCost: 975000, droids: [{ material: "Basic", family: "R4", rarity: "Rare" }, { material: "Basic", family: "R5", rarity: "Common" }, { material: "Basic", family: "R8", rarity: "Common" }] },
            { milestone: "3 → 4", credits: "2.95M", numericCost: 2950000, droids: [{ material: "Gold", family: "R9", rarity: "Rare" }, { material: "Gold", family: "B1 BATTLE", rarity: "Common" }, { material: "Gold", family: "B1 SECURITY", rarity: "Rare" }] },
            { milestone: "4 → 5", credits: "5.35M", numericCost: 5350000, droids: [{ material: "Gold", family: "2BB", rarity: "Rare" }, { material: "Gold", family: "R3", rarity: "Common" }, { material: "Gold", family: "SENATE HOVERCAM", rarity: "Rare" }] },
            { milestone: "5 → 6", credits: "9.85M", numericCost: 9850000, droids: [{ material: "Diamond", family: "BDX EXPLORER", rarity: "Rare" }, { material: "Diamond", family: "R4", rarity: "Rare" }, { material: "Diamond", family: "R5", rarity: "Common" }] },
            { milestone: "6 → 7", credits: "14.5M", numericCost: 14500000, droids: [{ material: "Diamond", family: "R8", rarity: "Common" }, { material: "Diamond", family: "R9", rarity: "Rare" }, { material: "Diamond", family: "B1 BATTLE", rarity: "Common" }] },
            { milestone: "7 → 8", credits: "36M", numericCost: 36000000, droids: [{ material: "Rainbow", family: "B1 SECURITY", rarity: "Rare" }, { material: "Rainbow", family: "R3", rarity: "Common" }, { material: "Rainbow", family: "2BB", rarity: "Rare" }] },
            { milestone: "8 → 9", credits: "89M", numericCost: 89000000, droids: [{ material: "Rainbow", family: "BDX EXPLORER", rarity: "Rare" }, { material: "Rainbow", family: "R4", rarity: "Rare" }, { material: "Rainbow", family: "R5", rarity: "Common" }] },
            { milestone: "9 → 10", credits: "220M", numericCost: 220000000, droids: [{ material: "Rainbow", family: "SENATE HOVERCAM", rarity: "Rare" }, { material: "Basic", family: "GROUNDMECH", rarity: "Epic" }, { material: "Basic", family: "TRAK-R", rarity: "Epic" }] },
            { milestone: "10 → 11", credits: "550M", numericCost: 550000000, droids: [{ material: "Basic", family: "B2 HEAVY", rarity: "Epic" }, { material: "Basic", family: "B2 SUPER", rarity: "Epic" }, { material: "Basic", family: "UTIL-TEC", rarity: "Epic" }] },
            { milestone: "11 → 12", credits: "1.36B", numericCost: 1360000000, droids: [{ material: "Gold", family: "TRAK-R", rarity: "Epic" }, { material: "Gold", family: "GROUNDMECH", rarity: "Epic" }, { material: "Rainbow", family: "BAL-CORE", rarity: "Rare" }] },
            { milestone: "12 → 13", credits: "3.40B", numericCost: 3400000000, droids: [{ material: "Rainbow", family: "B2 SUPER", rarity: "Epic" }, { material: "Basic", family: "MECHA-DROID", rarity: "Legendary" }, { material: "Basic", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "13 → 14", credits: "8.45B", numericCost: 8450000000, droids: [{ material: "Rainbow", family: "B2 HEAVY", rarity: "Epic" }, { material: "Basic", family: "B2-RP", rarity: "Legendary" }, { material: "Gold", family: "R7", rarity: "Legendary" }] },
            { milestone: "14 → 15", credits: "21.00B", numericCost: 21000000000, droids: [{ material: "Rainbow", family: "STRIKE-ORB", rarity: "Epic" }, { material: "Gold", family: "BB9", rarity: "Legendary" }, { material: "Gold", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "15 → 16", credits: "52.00B", numericCost: 52000000000, droids: [{ material: "Rainbow", family: "AMP WALKER", rarity: "Epic" }, { material: "Diamond", family: "B2-RP", rarity: "Legendary" }, { material: "Gold", family: "MECHA-DROID", rarity: "Legendary" }] },
            { milestone: "16 → 17", credits: "130.00B", numericCost: 130000000000, droids: [{ material: "Rainbow", family: "OPTI-POD", rarity: "Epic" }, { material: "Diamond", family: "R7", rarity: "Legendary" }, { material: "Gold", family: "MONO-WALKER", rarity: "Legendary" }] },
            { milestone: "17 → 18", credits: "325.00B", numericCost: 325000000000, droids: [{ material: "Rainbow", family: "UTIL-TEC", rarity: "Epic" }, { material: "Diamond", family: "BB9", rarity: "Legendary" }, { material: "Diamond", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "18 → 19", credits: "810.00B", numericCost: 810000000000, droids: [{ material: "Diamond", family: "MECHA-DROID", rarity: "Legendary" }, { material: "Rainbow", family: "R7", rarity: "Legendary" }, { material: "Rainbow", family: "B2-RP", rarity: "Legendary" }] },
            { milestone: "19 → 20", credits: "2.00T", numericCost: 2000000000000, droids: [{ material: "Rainbow", family: "MONO-WALKER", rarity: "Legendary" }, { material: "Rainbow", family: "OPTI-STRIKE", rarity: "Legendary" }, { material: "Rainbow", family: "CYCLO-GRAV", rarity: "Legendary" }] },
            { milestone: "20 → 21", credits: "3.00T", numericCost: 3000000000000, droids: [{ material: "Beskar", family: "LO", rarity: "Epic" }, { material: "Beskar", family: "R6", rarity: "Epic" }, { material: "Beskar", family: "HAUL-R", rarity: "Epic" }] },
            { milestone: "21 → 22", credits: "4.50T", numericCost: 4500000000000, droids: [{ material: "Beskar", family: "SEN-TRI", rarity: "Epic" }, { material: "Beskar", family: "STRIKE-ORB", rarity: "Epic" }, { material: "Beskar", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "22 → 23", credits: "6.00T", numericCost: 6000000000000, droids: [{ material: "Beskar", family: "BB9", rarity: "Legendary" }, { material: "Beskar", family: "CYCLO-GRAV", rarity: "Legendary" }, { material: "Beskar", family: "B2-RP", rarity: "Legendary" }] }
        ],
        4: [
            { milestone: "0 → 1", credits: "10K", numericCost: 10000, droids: [{ material: "Basic", family: "ID10", rarity: "Common" }, { material: "Basic", family: "PIT", rarity: "Common" }, { material: "Basic", family: "DRK-1 PROBE", rarity: "Common" }] },
            { milestone: "1 → 2", credits: "150K", numericCost: 150000, droids: [{ material: "Basic", family: "2BB", rarity: "Rare" }, { material: "Basic", family: "R3", rarity: "Common" }, { material: "Basic", family: "SENATE HOVERCAM", rarity: "Rare" }] },
            { milestone: "2 → 3", credits: "975K", numericCost: 975000, droids: [{ material: "Gold", family: "R5", rarity: "Common" }, { material: "Gold", family: "R8", rarity: "Common" }, { material: "Basic", family: "R4", rarity: "Rare" }] },
            { milestone: "3 → 4", credits: "2.95M", numericCost: 2950000, droids: [{ material: "Gold", family: "R9", rarity: "Rare" }, { material: "Gold", family: "B1 BATTLE", rarity: "Common" }, { material: "Gold", family: "B1 SECURITY", rarity: "Rare" }] },
            { milestone: "4 → 5", credits: "5.35M", numericCost: 5350000, droids: [{ material: "Gold", family: "2BB", rarity: "Rare" }, { material: "Gold", family: "R3", rarity: "Common" }, { material: "Gold", family: "SENATE HOVERCAM", rarity: "Rare" }] },
            { milestone: "5 → 6", credits: "9.85M", numericCost: 9850000, droids: [{ material: "Diamond", family: "BDX EXPLORER", rarity: "Rare" }, { material: "Diamond", family: "R4", rarity: "Rare" }, { material: "Diamond", family: "R5", rarity: "Common" }] },
            { milestone: "6 → 7", credits: "14.5M", numericCost: 14500000, droids: [{ material: "Diamond", family: "R8", rarity: "Common" }, { material: "Diamond", family: "R9", rarity: "Rare" }, { material: "Diamond", family: "B1 BATTLE", rarity: "Common" }] },
            { milestone: "7 → 8", credits: "36M", numericCost: 36000000, droids: [{ material: "Rainbow", family: "B1 SECURITY", rarity: "Rare" }, { material: "Rainbow", family: "R3", rarity: "Common" }, { material: "Rainbow", family: "2BB", rarity: "Rare" }] },
            { milestone: "8 → 9", credits: "89M", numericCost: 89000000, droids: [{ material: "Rainbow", family: "BDX EXPLORER", rarity: "Rare" }, { material: "Rainbow", family: "R4", rarity: "Rare" }, { material: "Rainbow", family: "R5", rarity: "Common" }] },
            { milestone: "9 → 10", credits: "220M", numericCost: 220000000, droids: [{ material: "Rainbow", family: "SENATE HOVERCAM", rarity: "Rare" }, { material: "Basic", family: "GROUNDMECH", rarity: "Epic" }, { material: "Basic", family: "TRAK-R", rarity: "Epic" }] },
            { milestone: "10 → 11", credits: "550M", numericCost: 550000000, droids: [{ material: "Basic", family: "B2 HEAVY", rarity: "Epic" }, { material: "Basic", family: "B2 SUPER", rarity: "Epic" }, { material: "Basic", family: "UTIL-TEC", rarity: "Epic" }] },
            { milestone: "11 → 12", credits: "1.36B", numericCost: 1360000000, droids: [{ material: "Rainbow", family: "BAL-CORE", rarity: "Rare" }, { material: "Gold", family: "GROUNDMECH", rarity: "Epic" }, { material: "Gold", family: "TRAK-R", rarity: "Epic" }] },
            { milestone: "12 → 13", credits: "3.40B", numericCost: 3400000000, droids: [{ material: "Rainbow", family: "B2 SUPER", rarity: "Epic" }, { material: "Basic", family: "MECHA-DROID", rarity: "Legendary" }, { material: "Basic", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "13 → 14", credits: "8.45B", numericCost: 8450000000, droids: [{ material: "Rainbow", family: "BAL-CORE", rarity: "Rare" }, { material: "Diamond", family: "GROUNDMECH", rarity: "Epic" }, { material: "Rainbow", family: "TRAK-R", rarity: "Epic" }] },
            { milestone: "14 → 15", credits: "21.00B", numericCost: 21000000000, droids: [{ material: "Diamond", family: "B2 HEAVY", rarity: "Epic" }, { material: "Rainbow", family: "B2 SUPER", rarity: "Epic" }, { material: "Basic", family: "B2-RP", rarity: "Legendary" }] },
            { milestone: "15 → 16", credits: "52.00B", numericCost: 52000000000, droids: [{ material: "Rainbow", family: "UTIL-TEC", rarity: "Epic" }, { material: "Basic", family: "BB9", rarity: "Legendary" }, { material: "Gold", family: "R7", rarity: "Legendary" }] },
            { milestone: "16 → 17", credits: "130.00B", numericCost: 130000000000, droids: [{ material: "Basic", family: "OPTI-STRIKE", rarity: "Legendary" }, { material: "Gold", family: "CYCLO-GRAV", rarity: "Legendary" }, { material: "Gold", family: "MECHA-DROID", rarity: "Legendary" }] },
            { milestone: "17 → 18", credits: "325.00B", numericCost: 325000000000, droids: [{ material: "Gold", family: "B2-RP", rarity: "Legendary" }, { material: "Gold", family: "BB9", rarity: "Legendary" }, { material: "Diamond", family: "R7", rarity: "Legendary" }] },
            { milestone: "18 → 19", credits: "810.00B", numericCost: 810000000000, droids: [{ material: "Diamond", family: "MECHA-DROID", rarity: "Legendary" }, { material: "Rainbow", family: "R7", rarity: "Legendary" }, { material: "Rainbow", family: "B2-RP", rarity: "Legendary" }] },
            { milestone: "19 → 20", credits: "2.00T", numericCost: 2000000000000, droids: [{ material: "Rainbow", family: "MONO-WALKER", rarity: "Legendary" }, { material: "Rainbow", family: "OPTI-STRIKE", rarity: "Legendary" }, { material: "Rainbow", family: "CYCLO-GRAV", rarity: "Legendary" }] },
            { milestone: "20 → 21", credits: "3.00T", numericCost: 3000000000000, droids: [{ material: "Beskar", family: "LO", rarity: "Epic" }, { material: "Beskar", family: "R6", rarity: "Epic" }, { material: "Beskar", family: "HAUL-R", rarity: "Epic" }] },
            { milestone: "21 → 22", credits: "4.50T", numericCost: 4500000000000, droids: [{ material: "Beskar", family: "SEN-TRI", rarity: "Epic" }, { material: "Beskar", family: "STRIKE-ORB", rarity: "Epic" }, { material: "Beskar", family: "PROTO-ROLLER", rarity: "Legendary" }] },
            { milestone: "22 → 23", credits: "6.00T", numericCost: 6000000000000, droids: [{ material: "Beskar", family: "BB9", rarity: "Legendary" }, { material: "Beskar", family: "CYCLO-GRAV", rarity: "Legendary" }, { material: "Beskar", family: "B2-RP", rarity: "Legendary" }] }
        ]
    };

const state = {
  activeCycle: 1,
  checks: {},
  hideCompleted: false,
  goalRb: "10",
  creditsPerMinRaw: "1M",
  creditsPerMin: 1000000,
  customNotes: ""
};

const $ = sel => document.querySelector(sel);
const nodesList = [];

function parseShorthand(str) {
  if (!str) return 0;
  const clean = str.toString().trim().toUpperCase();
  const num = parseFloat(clean);
  if (isNaN(num)) return 0;
  if (clean.endsWith("K")) return num * 1000;
  if (clean.endsWith("M")) return num * 1000000;
  if (clean.endsWith("B")) return num * 1000000000;
  if (clean.endsWith("T")) return num * 1000000000000;
  return num;
}

function formatShorthand(val) {
  if (val >= 1e12) return (val / 1e12).toFixed(2) + "T";
  if (val >= 1e9) return (val / 1e9).toFixed(2) + "B";
  if (val >= 1e6) return (val / 1e6).toFixed(2) + "M";
  if (val >= 1000) return (val / 1000).toFixed(1) + "K";
  return val.toString();
}

function formatTime(mins) {
  if (mins === Infinity || isNaN(mins)) return "-";
  if (mins < 1) return "Less than a min";
  const hrs = Math.floor(mins / 60);
  const remMins = Math.round(mins % 60);
  return hrs > 0 ? `${hrs}h ${remMins}m` : `${remMins} mins`;
}

function buildFlatNodes() {
  let idx = 0;
  nodesList.length = 0; // Reset array
  Object.keys(cyclesManifest).forEach(cKey => {
    const cycleNum = parseInt(cKey);
    cyclesManifest[cycleNum].forEach((tierData, tIdx) => {
      tierData.droids.forEach(d => {
        nodesList.push({
          globalIdx: idx,
          cycle: cycleNum,
          tier: tIdx + 1,
          milestone: tierData.milestone,
          numericCost: tierData.numericCost,
          family: d.family.trim().toUpperCase(),
          material: d.material,
          rarity: d.rarity
        });
        idx++;
      });
    });
  });
}

// BUG FIX: Checks off ALL lower tier droids matching the family string, regardless of material type setup
function cascadeProgression(globalIdx, targetState) {
  const node = nodesList[globalIdx];
  if (!node || !targetState) return;
  nodesList.forEach(n => {
    if (n.cycle === node.cycle && n.family === node.family && n.tier < node.tier) {
      state.checks[n.globalIdx] = true;
    }
  });
}

// BUG FIX: Only flags the SINGLE highest checked tier node for a given family as safe to sell
function computeSafeToSell() {
  const safeFlags = {};
  nodesList.forEach(n => { safeFlags[n.globalIdx] = false; });
  const activeNodes = nodesList.filter(n => n.cycle === state.activeCycle);

  // Group verified items by family string
  const checkedFamilies = {};
  activeNodes.forEach(n => {
    if (state.checks[n.globalIdx]) {
      if (!checkedFamilies[n.family]) {
        checkedFamilies[n.family] = [];
      }
      checkedFamilies[n.family].push(n);
    }
  });

  // Flag ONLY the highest index item path inside the family
  Object.keys(checkedFamilies).forEach(fam => {
    const nodes = checkedFamilies[fam];
    if (nodes.length > 0) {
      nodes.sort((a, b) => b.tier - a.tier);
      const highestNode = nodes[0];
      safeFlags[highestNode.globalIdx] = true;
    }
  });

  return safeFlags;
}

function load() {
  try {
    const saved = localStorage.getItem("tycoon_tracker_pro_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.checks) state.checks = parsed.checks;
      if (parsed.activeCycle !== undefined) state.activeCycle = parsed.activeCycle;
      if (parsed.hideCompleted !== undefined) state.hideCompleted = parsed.hideCompleted;
      if (parsed.goalRb !== undefined) state.goalRb = parsed.goalRb;
      if (parsed.creditsPerMinRaw !== undefined) state.creditsPerMinRaw = parsed.creditsPerMinRaw;
      if (parsed.customNotes !== undefined) state.customNotes = parsed.customNotes;
      state.creditsPerMin = parseShorthand(state.creditsPerMinRaw) || 1000000;
    }
  } catch (e) {
    console.error("Local data rollback failed", e);
  }
}

function save() {
  localStorage.setItem("tycoon_tracker_pro_state", JSON.stringify(state));
}

function sync() {
  const activeNodes = nodesList.filter(n => n.cycle === state.activeCycle);
  const checkedActive = activeNodes.filter(n => state.checks[n.globalIdx]);
  
  const pct = activeNodes.length ? Math.round((checkedActive.length / activeNodes.length) * 100) : 0;
  $("#globalFill").style.width = `${pct}%`;
  $("#globalText").textContent = `${pct}% (${checkedActive.length}/${activeNodes.length})`;

  const manifest = cyclesManifest[state.activeCycle] || [];
  let nextCostVal = "-";
  let remCostVal = 0;
  let nextFound = false;

  manifest.forEach((tier, idx) => {
    const tierNodes = activeNodes.filter(n => n.tier === (idx + 1));
    const tierDone = tierNodes.every(n => state.checks[n.globalIdx]);
    if (!tierDone) {
      if (!nextFound) {
        nextCostVal = formatShorthand(tier.numericCost);
        nextFound = true;
      }
      remCostVal += tier.numericCost;
    }
  });

  $("#nextCost").textContent = `Next Rebirth: ${nextCostVal}`;
  $("#remCost").textContent = `Remaining: ${formatShorthand(remCostVal)}`;

  if (state.creditsPerMin > 0 && remCostVal > 0) {
    const mins = remCostVal / state.creditsPerMin;
    $("#etaText").textContent = `ETA: ${formatTime(mins)}`;
  } else {
    $("#etaText").textContent = `ETA: -`;
  }

  const goalIdx = parseInt(state.goalRb);
  let goalAccumulator = 0;
  manifest.forEach((tier, idx) => {
    if (idx < goalIdx) {
      const tierNodes = activeNodes.filter(n => n.tier === (idx + 1));
      const tierDone = tierNodes.every(n => state.checks[n.globalIdx]);
      if (!tierDone) goalAccumulator += tier.numericCost;
    }
  });

  if (goalIdx > 0) {
    const goalMins = state.creditsPerMin > 0 ? (goalAccumulator / state.creditsPerMin) : Infinity;
    $("#goalSummary").innerHTML = `
      <strong>Target Goal: Rebirth #${goalIdx}</strong><br/>
      Credits Required: ${formatShorthand(goalAccumulator)}<br/>
      Time Allocation Needed: ${formatTime(goalMins)}
    `;
  } else {
    $("#goalSummary").textContent = "Goal configuration clear.";
  }

  renderMainGrid();
}

function renderTabs() {
  const container = $("#cycleTabs");
  container.innerHTML = "";
  Object.keys(cyclesManifest).forEach(c => {
    const btn = document.createElement("button");
    btn.textContent = `Cycle ${c}`;
    if (parseInt(c) === state.activeCycle) btn.className = "active";
    btn.onclick = () => {
      state.activeCycle = parseInt(c);
      save();
      renderGoalSelector();
      sync();
      renderTabs();
    };
    container.appendChild(btn);
  });
}

function renderGoalSelector() {
  const select = $("#goalRb");
  select.innerHTML = '<option value="0">Select target level...</option>';
  const manifest = cyclesManifest[state.activeCycle] || [];
  manifest.forEach((tier, idx) => {
    const opt = document.createElement("option");
    opt.value = idx + 1;
    opt.textContent = `Rebirth #${idx + 1} (${tier.credits})`;
    if (state.goalRb === (idx + 1).toString()) opt.selected = true;
    select.appendChild(opt);
  });
}

function renderMainGrid() {
  const main = $("#mainView");
  main.innerHTML = "";

  const sQuery = ($("#searchInput").value || "").trim().toLowerCase();
  const rFilt = $("#rarityFilter").value;
  const mFilt = $("#matFilter").value;
  const statusFilt = $("#statusFilter").value;

  const manifest = cyclesManifest[state.activeCycle] || [];
  const safeFlags = computeSafeToSell();

  manifest.forEach((tierData, idx) => {
    const tierNum = idx + 1;
    const tierNodes = nodesList.filter(n => n.cycle === state.activeCycle && n.tier === tierNum);
    
    let filteredNodes = tierNodes.filter(n => {
      if (sQuery && !n.family.toLowerCase().includes(sQuery)) return false;
      if (rFilt && n.rarity !== rFilt) return false;
      if (mFilt && n.material !== mFilt) return false;
      if (statusFilt === "complete" && !state.checks[n.globalIdx]) return false;
      if (statusFilt === "incomplete" && state.checks[n.globalIdx]) return false;
      return true;
    });

    if (filteredNodes.length === 0) return;

    const tierDone = tierNodes.every(n => state.checks[n.globalIdx]);
    if (state.hideCompleted && tierDone) return;

    const tierDiv = document.createElement("div");
    tierDiv.className = `tier glass ${tierDone ? 'done' : ''}`;

    const metaDiv = document.createElement("div");
    metaDiv.className = "tmeta";
    metaDiv.innerHTML = `
      <div class="tmeta-header">
        <span>RB #${tierNum}</span>
        <span class="counter-badge">${tierNodes.filter(n => state.checks[n.globalIdx]).length}/${tierNodes.length}</span>
      </div>
      <div class="tcost">${tierData.credits}</div>
    `;
    tierDiv.appendChild(metaDiv);

    const actionDiv = document.createElement("div");
    actionDiv.innerHTML = `<button class="stage-auto" onclick="autoToggleTier(${tierNum})">Toggle Tier</button>`;
    tierDiv.appendChild(actionDiv);

    const cardsDiv = document.createElement("div");
    cardsDiv.className = "cards";

    filteredNodes.forEach(n => {
      const isChecked = state.checks[n.globalIdx];
      const isSafe = safeFlags[n.globalIdx];
      
      const card = document.createElement("button");
      card.className = `droid mat-theme-${n.material.toLowerCase()} ${isChecked ? 'checked' : ''} ${isSafe ? 'safe-to-sell' : ''}`;
      
      card.innerHTML = `
        <div class="tag mat-${n.material.toLowerCase()}">${n.material.toUpperCase()}</div>
        <div>
          <div class="dname">${n.family}</div>
          <div class="dsub">
            <span class="rarity-chip rarity-${n.rarity.toLowerCase()}">${n.rarity}</span>
          </div>
        </div>
      `;

      card.onclick = () => {
        const nextState = !state.checks[n.globalIdx];
        state.checks[n.globalIdx] = nextState;
        if (nextState) cascadeProgression(n.globalIdx, true);
        save();
        sync();
      };

      cardsDiv.appendChild(card);
    });

    tierDiv.appendChild(cardsDiv);
    main.appendChild(tierDiv);
  });

  if (!main.children.length) {
    main.innerHTML = `<div class="small" style="padding:20px;text-align:center;color:var(--muted)">No profile milestones match specified parameters.</div>`;
  }
}

window.autoToggleTier = function(tierNum) {
  const tierNodes = nodesList.filter(n => n.cycle === state.activeCycle && n.tier === tierNum);
  const anyUnchecked = tierNodes.some(n => !state.checks[n.globalIdx]);
  
  tierNodes.forEach(n => {
    state.checks[n.globalIdx] = anyUnchecked;
    if (anyUnchecked) cascadeProgression(n.globalIdx, true);
  });
  save();
  sync();
};

function initEventPipelines() {
  $("#searchInput").oninput = () => renderMainGrid();
  $("#rarityFilter").onchange = () => renderMainGrid();
  $("#matFilter").onchange = () => renderMainGrid();
  $("#statusFilter").onchange = () => renderMainGrid();

  $("#toggleHide").onclick = () => {
    state.hideCompleted = !state.hideCompleted;
    $("#toggleHide").innerHTML = state.hideCompleted ? 
      `<i data-lucide="eye" style="width:14px"></i> Show Completed` : 
      `<i data-lucide="eye-off" style="width:14px"></i> Hide Completed`;
    lucide.createIcons();
    save();
    renderMainGrid();
  };

  $("#resetBtn").onclick = () => {
    if (confirm("Reset tracking data across all system cycles? This cannot be undone.")) {
      state.checks = {};
      save();
      sync();
    }
  };

  $("#clearCycle").onclick = () => {
    if (confirm(`Wipe tracking state specifically for Active Cycle Profile ${state.activeCycle}?`)) {
      nodesList.forEach(n => {
        if (n.cycle === state.activeCycle) state.checks[n.globalIdx] = false;
      });
      save();
      sync();
    }
  };

  $("#markToRb").onclick = () => {
    const value = parseInt($("#markRbInput").value);
    if (isNaN(value) || value < 1 || value > 23) return alert("Select a tier level within ranges 1 through 23.");
    nodesList.forEach(n => {
      if (n.cycle === state.activeCycle && n.tier < value) {
        state.checks[n.globalIdx] = true;
        cascadeProgression(n.globalIdx, true);
      }
    });
    save();
    sync();
  };

  $("#setGoal").onclick = () => {
    const goalSelector = $("#goalRb");
    state.goalRb = goalSelector.value;
    state.creditsPerMinRaw = $("#creditsPerMin").value || "1M";
    state.creditsPerMin = parseShorthand(state.creditsPerMinRaw);
    save();
    sync();
  };

  $("#customNotes").oninput = e => {
    state.customNotes = e.target.value;
    save();
  };

  $("#mobNext").onclick = () => {
    const c = state.activeCycle;
    const manifest = cyclesManifest[c] || [];
    const activeNodes = nodesList.filter(n => n.cycle === c);
    
    const nextTierIdx = manifest.findIndex((_, t) => {
      const tierNodes = activeNodes.filter(n => n.tier === (t + 1));
      return !tierNodes.every(n => state.checks[n.globalIdx]);
    });

    if (nextTierIdx !== -1) {
      window.autoToggleTier(nextTierIdx + 1);
    }
  };
}

window.addEventListener("DOMContentLoaded", () => {
  buildFlatNodes();
  load();
  renderTabs();
  renderGoalSelector();
  initEventPipelines();
  
  $("#customNotes").value = state.customNotes || "";
  $("#creditsPerMin").value = state.creditsPerMinRaw || "1M";
  if (state.hideCompleted) {
    $("#toggleHide").innerHTML = `<i data-lucide="eye" style="width:14px"></i> Show Completed`;
  }
  
  sync();
  lucide.createIcons();
});
