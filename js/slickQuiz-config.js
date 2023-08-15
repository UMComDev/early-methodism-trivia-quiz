// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "",
        "main":    "",
        "results": "Thanks for taking our quiz! Share this quiz with your friends and family.",
        "level1":  "Nice job!",
        "level2":  "Good effort!",
        "level3":  "Needs a little work." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "What is the name of the person credited with founding Methodism?",
            "a": [
                {"option": "a.	Francis Asbury", "correct": false},
                {"option": "b.	George Whitefield", "correct": false},
                {"option": "c.	John Wesley", "correct": true},
                {"option": "d.	King George III of England", "correct": false} // no comma here
            ],
            "learnMore": "<strong>Correct answer: c</strong>. John Wesley (1703-1792) is known as the founder of the Methodist movement." // no comma here
        },
        { // Question 2
            "q": "What is the name of John Wesley's brother who was a hymn writer and also instrumental (pun intended) in Methodism's founding?",
            "a": [
                {"option": "a.	Samuel Wesley", "correct": false},
                {"option": "b.	Charles Wesley", "correct": true},
                {"option": "c.	Fred Wesley", "correct": false},
                {"option": "d.	Paul Wesley", "correct": false} // no comma here
            ],
            "learnMore": "<strong>Correct answer: b</strong>. Charles Wesley (1707-1788) was a formative leader in the Methodist movement, working alongside his brother, John. Although he preached, Charles is best known as a prolific poet and hymn writer." // no comma here
        },
        { // Question 3
            "q": "Name the woman who is considered the Mother of Methodism, who gave birth to John, Charles and 17 other children.",
            "a": [
                {"option": "a.	Sally Wesley", "correct": false},
                {"option": "b.	Mary Wesley", "correct": false},
                {"option": "c.	Sarah Wesley", "correct": false},
                {"option": "d.	Susanna Wesley", "correct": true} // no comma here
            ],
            "learnMore": "<strong>Correct answer: d</strong>. Susanna Wesley (1669-1742) was a dynamic example of faith for her children, particularly her two sons, John and Charles. Though Susanna gave birth to 19 children, nine of them died as infants." // no comma here
        },
        { // Question 4
            "q": "In what country did John and Charles Wesley live?",
            "a": [
                {"option": "a.	England",                              "correct": true},
                {"option": "b.	Ireland",                              "correct": false},
                {"option": "c.	Scotland",                              "correct": false},
                {"option": "d.	America",                 "correct": false} //no comma here
            ],
            "learnMore": "<strong>Correct answer: a</strong>. The Wesleys lived in England, where the family home still stands in Epworth." // no comma here
        },
        { // Question 5
            "q": "What catastrophic event happened to John Wesley when he was 5 years old?",
            "a": [
                {"option": "a.	He was bitten by a snake while playing outside in the fields.",  "correct": false},
                {"option": "b.	He ran away from home and was lost for days.", "correct": false},
                {"option": "c.	His home caught fire and he was saved from the flames.", "correct": true},
                {"option": "d.	He fell into a nearby lake and almost drowned.", "correct": false} // no comma here
            ],
            "learnMore": "<strong>Correct answer: c</strong>. The roof of the family home caught fire during the night. All of the children were removed from the burning home except for John, who was left stranded on an upper floor. With stairs on fire and the roof set to collapse, a neighbor rescued John through a window by standing on the shoulders of another man. Wesley later used the phrase, \"a brand plucked out of the fire,\" quoting Zechariah 3:2, to describe the incident." // no comma here
        },
        { // Question 6
            "q": "What Georgia city did John Wesley visit in 1735?",
            "a": [
                {"option": "a.	Athens",   "correct": false},
                {"option": "b.	Atlanta",   "correct": false},
                {"option": "c.	Tybee Island",       "correct": false},
                {"option": "d.	Savannah",     "correct": true} //no comma here
            ],
            "learnMore": "<strong>Correct answer: d</strong>. John and Charles Wesley sailed from England in 1735 to the colony of Georgia, where they lived for one year in Savannah. John's primary role while in Savannah was to evangelize Native Peoples. While there, Wesley met Moravians, who greatly influenced his faith." // no comma here
        },
        { // Question 7
            "q": "What happened to John Wesley's heart on May 24, 1738?" ,
            "a": [
                {"option": "a.	It was strangely warmed by the understanding of God's love and grace for him",     "correct": true},
                {"option": "b.	He had a heart attack while riding his horse to a church",     "correct": false},
                {"option": "c.	His heart was broken when the love of his life rejected him",     "correct": false},
                {"option": "d.	During open heart surgery, his heart stopped and he had a near death experience.",    "correct": false} // no comma here
            ],
            "learnMore": "<strong>Correct answer: a</strong>. John Wesley attended a religious service on Aldersgate Street on May 24, 1738, where he described \"my heart strangely warmed\" at the recognition of God's love and grace for him and the assurance of his salvation. United Methodists commemorate John Wesley's experience on Aldersgate Day each year on May 24 (of the Sunday closest to the date)."
        },
        { // Question 8
            "q": "What university were John and Charles Wesley attending when they started the Holy Club?",
            "a": [
                {"option": "a.	Cambridge University",          "correct": false},
                {"option": "b.	University of Georgia",          "correct": false},
                {"option": "c.	Yale University",          "correct": false},
                {"option": "d.	Oxford University",     "correct": true} // no comma here
            ],
            "learnMore": "<strong>Correct answer: d</strong>. John and Charles Wesley gathered fellow students at Oxford University to meet and pray together and to minister to townspeople. The group became known as the Holy Club." // no comma here
        }// no comma here
       ]
};
$(function () { 
    $('#slickQuiz').slickQuiz({
        // options
    });
});