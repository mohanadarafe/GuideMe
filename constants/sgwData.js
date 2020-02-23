export function sgwData() {
    var buildings = [];
​
    buildings["Hall Building"] = {
        name: "Henry F. Hall Building",
        address: "1455 De Maisonneuve Blvd O., Montreal, QC, H3G 1M8",
        departments: [
            "Classics, Moden Languages and Linguistics",
            "Geography, Planning and Environment",
            "Political Science, Sociology and Anthropology, Economics",
            "School of Irish Studies"
        ],
        services: [
            "Welcome Crew",
            "DB Clarke Theatre",
            "Dean of Students",
            "Aboriginal Student Resource Centre",
            "Concordia Student Union",
            "IT Service Desk"
        ]
    }

    buildings["EV Building"] = {
        name: "Engineering, Computer Science and Visual Arts Integrated Complex",
        address: "1515 Rue St Catherine O. Montreal, QC, H3G 2W1",
        departments: [
            "Gina Cody School of Engineering and Computer Science",
            "Electrical and Computer Engineering",
            "Building, Civil and Environmental Engineering",
            "Computer Science and Software Engineering",
            "Mechanical, Industrial and Aerospace"
        ],
        services: [
            "Le Gym",
            "Fofa Gallery"
        ]
    }

    buildings["GM Building"]={
        name: "Guy-De Maisonneuve Building",
        address: "1550 Rue de Maisonneuve O., Montreal, QC, H3G 1N1",
        departments: [
            "Contemporary Dance",
            "Music",
            "Theatre"
        ],
        services: [
            "Access Centre for Students with Disabilities",
            "Environmental Health and Safety",
            "Facilities Management",
            "Financial Aid & Awards Office",
            "Financial Services",
            "Graduate Studies"
        ]
    }

    buildings["JMSB"]={
        name: "John Molson Building",
        address: "1450 Rue Guy, Montreal, QC, H3H 0A1",
        departments: [
            "Accountancy",
            "Supply Chain and Business Technology Management",
            "Finance",
            "Management",
            "Marketing"
        ],
        services: [
            "Career Management Services",
            "John Molson Executive Centre",
            "Performing Arts Facilities"
        ]
    }

    buildings["LB Building"]={
        name: "JW McConnell Building",
        address: "1400 De Maisonneuve Blvd. O. Montreal, QC, H3G 1M8",
        departments: [
            "English",
            "History",
            "Études Française",
            "Mathematics and Statistics",
            "Education",
            "Centre for Interdisciplinary Studies in Society"
        ],
        services: [
            "R. Howard Webster Library",
            "Welcome Centre",
            "Leonard and Bina Ellen Art Gallery",
            "J.A. De Sève Cinema",
            "Birks Student Centre",
            "Campus Stores"
        ]
    }
​   buildings["FG Building"]={
    name: "Faubourg Building",
        address: "1250 Rue Guy, QC, H3G 2T4",
        departments: [
            "Concordia Continuing Education",
            "Mel Hoppenheim School of Cinema",
            "Montreal Institute for Genocide and Human Rights Studies (MIGS)",
            "District 3 Innovation Centre"
        ],
        services: [
            "Human Resources",
            "Enrolment Services / Office of the Registrar / Student Recruitment",
            "Examinations Office",
            "Senior Non-Credit Program"
        ]
    }   
    buildings["Grey Nuns"]={
        name: "Grey Nuns Building",
        address: "1190 Rue Guy, Montreal, QC, H3H 2L4",
        departments: null,
        services: [
            "Residences",
            "Grey Nuns Library (Reading Room and Group Study Rooms)",
            "Day Care Centre",
            "Summer Accommodation"
        ]
    }
    return buildings;
}
​
// export default {
//     B: {
//         name: "B Annex",
//         address: "2160 Rue Bishop, Montreal, QC, H3G 2E9",
//         departments: null,
//         services: [
//             "Engineering and Computer Science Association"
//         ]
//     }, CI: {
//         name: "CI Annex",
//         address: "2149 Rue Mackay, Montreal, QC, H3G 2J2",
//         departments: [
//             "School of Community and Public Affairs"
//         ],
//         services: null
//     }, CL: {
//         name: "CL Annex",
//         address: "1665 Rue Ste-Catherine O. Montreal, QC, H3H 1L9",
//         departments: null,
//         services: [
//             "Concordia Continuing Education"
//         ]
//     }, D: {
//         name: "D Annex",
//         address: "2140 Rue Bishop, Montreal, QC, H3G 2E9",
//         departments: [
//             "Theological Studies"
//         ],
//         services: null
//     }, EN: {
//         name: "EN Annex",
//         address: "2155 Rue Guy, Montreal, QC, H3H 2L9",
//         departments: null,
//         services: null
//     },  FA: {
//         name: "FA Annex",
//         address: "2060 Rue Mackay, QC, H3G 2J1",
//         departments: [
//             "Department of Religions and Cultures"
//         ],
//         services: null
//     },  FG: {
//         name: "Faubourg Ste-Catherine Building",
//         address: "1610 Rue St. Catherine O. Montreal, QC, H3H 1L9",
//         departments: [
//             "Education"
//         ],
//         services: [
//             "Classrooms"
//         ]
//     }, GA: {
//         name: "Grey Nuns Annex",
//         address: "1211-1215 Rue St. Mathieu, Montreal, QC, H3H 2S2",
//         departments: [
//             "Department of Education"
//         ],
//         services: null
//     },   GS: {
//         name: "GS Building",
//         address: "1538 Sherbrook St O., Montreal, QC, H3H 2L9",
//         departments: null,
//         services: null
//     }, K: {
//         name: "K Aneex",
//         address: "2150 Rue Bishop, Montreal, QC, H3G 2E9",
//         departments: null,
//         services: [
//             "Theological Studies"
//         ]
//     },  LD: {
//         name: "K Building",
//         address: "1424 Rue Bishop, Montreal, QC, H3G 1M8",
//         departments: null,
//         services: [
//             "CSU Day Care & Nursery"
//         ]
//     }, LS: {
//         name: "Learning Square",
//         address: "1535 De Maisonneuve Blvd. W. Montreal, QC, H3G 1M9",
//         departments: null,
//         services: [
//             "IT Services -- 1st Floor",
//             "IT Services -- 2nd Floor"
//         ]
//     }, M: {
//         name: "M Annex",
//         address: "2135 Rue Mackay, Montreal, QC, H3G 2J2",
//         departments: null,
//         services: null
//     },  MI: {
//         name: "MI Annex",
//         address: "2130 Rue Bishop, Montreal, QC, H3H 2E9",
//         departments: null,
//         services: [
//             "ACUMAE",
//             "SCOMM",
//             "CUSSU",
//             "CUUSS-TS",
//             "CULEU",
//             "CUPEU"
//         ]
//     }, MT: {
//         name: "Montfiore Building",
//         address: "1195 Rue Guy, Montreal, QC, H3H 2K7",
//         departments: null,
//         services: [
//             "Conference Services"
//         ]
//     }, MU: {
//         name: "MU Annex",
//         address: "2170 Rue Bishop, Montreal, QC, H3H 2E9",
//         departments: null,
//         services: [
//             "Simone de Beauvoir Institute"
//         ]
//     }, OS: {
//         name: "OS Building",
//         address: "1191 Rue de la Montagne, Montreal, QC, H3H 1Z2",
//         departments: null,
//         services: null
//     }, P: {
//         name: "P Annex",
//         address: "2020 Rue Mackay, Montreal, QC, H3G 2M2",
//         departments: null,
//         services: null
//     }, PR: {
//         name: "P Annex",
//         address: "2100 Rue Mackay, Montreal, QC, H3G 2J1",
//         departments: null,
//         services: null
//     }, Q: {
//         name: "Q Annex",
//         address: "2010 Rue Mackay, Montreal, QC, H3G 2J1",
//         departments: null,
//         services: [
//             "Ethnic Students' Association"
//         ]
//     }, R: {
//         name: "R Annex",
//         address: "2050 Rue Mackay, Montreal, QC, H3G 2J1",
//         departments: [
//             "Religions and Cultures"
//         ],
//         services: null
//     }, RR: {
//         name: "RR Annex",
//         address: "2040 Rue Mackay, Montreal, QC, H3G 2J1",
//         departments: [
//             "Liberal Arts College"
//         ],
//         services: null
//     }, S: {
//         name: "S Annex",
//         address: "2145 Rue Mackay, Montreal, QC, H3G 2J2",
//         departments: [
//             "Department of Philosophy"
//         ],
//         services: null
//     }, SB: {
//         name: "Samuel Bronfman Building",
//         address: "1590 Rue Docteur Penfield, Montreal, QC, H3G 1C5",
//         departments: null,
//         services: [
//             "Arts and Services Research Groups"
//         ]
//     }, T: {
//         name: "T Annex",
//         address: "2030 Rue Mackay, Montreal, QC, H3G 1C5",
//         departments: null,
//         services: [
//             "Graduate Students Association"
//         ]
//     }, TD: {
//         name: "Toronto Dominion Building",
//         address: "1410 Rue Guy, Montreal, QC, H3H 2L7",
//         departments: null,
//         services: [
//             "CUSP"
//         ]
//     }, V: {
//         name: "V Annex",
//         address: "1410 Rue Guy, Montreal, QC, H3H 2L7",
//         departments: null,
//         services: [
//             "CUTV",
//             "Centre 2110"
//         ]
//     }, VA: {
//         name: "Visual Arts Building",
//         address: "1395 Rene-Levesque Blvd. O. Montreal, QC, H3G 2M5",
//         departments: [
//             "Studio Arts",
//             "Art History",
//             "Art Education",
//             "Creative Arts Therapies"
//         ],
//         services: [
//             "VAV Art Gallery",
//             "Art Supply Store"
//         ]
//     }, X: {
//         name: "X Annex",
//         address: "2080 Rue Mackay, Montreal, QC, H3G 2J1",
//         departments: null,
//         services: [
//             "Concordia Internation"
//         ]
//     },
//     Z: {
//         name: "Z Annex",
//         address: "2090 Rue Mackay, Montreal, QC, H3G 2J1",
//         departments: null,
//         services: [
//             "Concordia Internation"
//         ]
//     }
// }