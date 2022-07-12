var GEOG456 = {
    course: 'GEOG456',
    courseTitle: 'Geovisualizing Change',
    semester: 'Fall',
    year:'2022',
    days: "T-TH",
    time: '',
    officeHours:"Tuesday from 4pm to 5pm",
    feriados:['Fri Aug 19', 'Mon Sep 5', 'Wed Oct 12',
             'Tues Sept 6', 'Mon Sept 26', 'Thur Oct 20' ,
            'Fri Oct 21', 'Wed Nov 23', 'Thur Nov 24', 'Fri Nov 25'],
    firstMonday: 'Mon Aug 15 2022',
    firstDayOfClass: 'Tue Aug 16 2022',
    classesEnd: 'Wed Nov 30 2022',
    conflict:0,
    alert:'off',
    topics:[
        {topic:'Introduction to class', 
        
            video:[{title:"Intro to HTML, CSS, and JS"},
                    {title:"* Make a github webpage"}],
            hw:[{title:'Make basic Upload page to GitHub', deadline:1, value:4, rubric:{'page runs from Github':1, 'div and h1 elements created and have style':1, 'div has onclick event to console.log':1, 'h1 has onclick event with alert':1},description:'Create a webpage that has a div with a background color besides white and an h1 element. The h1 element has to have a onclick event with an alert that says Hello there, and the div should have an onclick event that creates a console.log that says the `the div was clicked`. Upload this HTML page to github and submit the link of the page in Sakai. Note: if the link does not work from your cellphone and works in your computer, it probably means that you sent me a local link and not the webpage link in Github'}]},
        
        {topic:'Intro to JS (arrays, objects, loops and functions', 
        
            video:[{title:"* JSON array and object"},
                    {title:"* Loops, functions and DOM"}],
            hw:[{title:'Show and Tell 1', deadline:1, value:5, rubric:{'provided 3 valuable examples':3, 'the examples were put in context of the student`s interest':1, 'presented within the alloted time':1},description:'Find three visualizations that you would like to share with the rest of the class. This visualizations should focus on presenting time and not space. Hence, do not present figures that have map components we will share those at another time. The figures should be related to your area of interest'},
            {title:'Find dataset', deadline:1, value:1, rubric:{'found a dataset':1},description:'find a dataset that has a temporal component and that is related to your interest. You will use this dataset for future homeworks'}
                ]},
        
        {topic:'Show and tell 1: Graphs with temporal component', 
        
                video:[{title:"* Get data into your script"},
                        {title:"* Transform your data"},
                        {title:"* Intro to Plotly"}],      
                hw:[{title:'* Make several Plotly figures and post in a Page', deadline:'before next2 class', value:12, rubric:{'bar plot':1, 'scatter plot':1, 'polar plot':1, 'another complex plot ':1,'used colors that facilitate reading of graph data':4, 'graphs have titles and legend': 4,'described process and limitations for each figure':4},description:'Make a scaterplot, a barplot, a polar plot and some complex plot using Plotly and a dataset of your own interest that has a temporal component. Try to create figures that explore the how a certain process changes through time. Each figure could be a single HTML file with a Title and a short description of the limitations and benefits of the type of visualization used. Create an index.html page that has a link to each of the plots and submit the link to the index.html file in Sakai.'}
            ]},
        
        {topic:'Introduction to Plotly', 
                video:[],                 
                hw:[]},
        
        {topic:'Student presentations of their work', 
        
                video:[],  
                hw:[{title:'Reading discussion questions', deadline:1, value:5, rubric:{'submitted well-thought questions on time':3, 'active participation in class discussion':2},description:'Come up with two or three discussion points related to each article posted in Sakai. These should be questions to provoke reflection and conversation with your classmates: if you have factual questions about anything mentioned in these articles, you should do the research to answer them yourself.'}]},

        {topic:'Reading discussion and lecture on time in maps', 
        
                video:[],  
                hw:[{title:'Show and Tell 2', deadline:1, value:5, rubric:{'provided 3 valuable examples':3, 'the examples were put in context of the student`s interest':1, 'presented within the alloted time':1},description:'Find three web based geovisualizations that you would like to share with the rest of the class. This visualizations should focus on presenting both time and space using mostly vectors. The figures should be related to your area of interest'},
                    {title:'Find dataset', deadline:1, value:1, rubric:{'found a dataset':1},description:'find a dataset that has a both a temporal and geographic component and that is related to your interest. You will use this dataset for a future homework. It can be CSV, geoJSON or a shapefile'}
                    ]},


        {topic:'Show and tell 2', 
        
        video:[{title:"Intro to webmapping using Leaflet"}],  
        hw:[{title:'Make a leaflet map with at least one maker', deadline:1, value:3, rubric:{'leaflet map with OSM tile background':1, 'has a marker':1, 'the marker has a popup':1},description:'Make a leaflet map outside of Chapel Hill. The map has an OSM tile background, a marker and the marker has popup with information about the place that is marking'}]},
        
        {topic:'Introduction to web maps', 
                video:[{title:"* Using a slider - hurricane map"}, {title:"Using a slider and a button - US cessions map"}],  
                hw:[{title:'Make a leaflet map with a slider or button that controls a time variable', deadline:2, value:3, rubric:{'leaflet map displays data':1, 'the slider or button controls a time variable':4},description:'Make a leaflet map using a dataset that has a temporal component. Use a button or a slider to control how features that have a variable related to time'}]},
        {topic:'Web map controls', 
                video:[],  
                hw:[{title:'Final project proposal', deadline:8, value:3, rubric:{},description:''}]},
        
        {topic:'Student presentations of their work',         
                video:[],  
                hw:[{title:'Reading discussion questions', deadline:1, value:5, rubric:{'submitted well-thought questions on time':3, 'active participation in class discussion':2},description:'Come up with two or three discussion points related to each article posted in Sakai. These should be questions to provoke reflection and conversation with your classmates: if you have factual questions about anything mentioned in these articles, you should do the research to answer them yourself.'}]},

        {topic:'Reading discussion and lecture on standardization', 
                video:[],  
                hw:[{title:'Show and Tell 3', deadline:1, value:5, rubric:{'provided 3 valuable examples':3, 'the examples were put in context of the student`s interest':1, 'presented within the alloted time':1},description:'Find three geovisualizations that you would like to share with the rest of the class. This visualizations should focus on presenting both time and space using remote sensing images or static maps that engage with the topic of space and time. The figures should be related to your area of interest'},
                ]},

        {topic:'Show and tell 3',
                video:[{title:"Intro to GEE"}],  
                hw:[{title:'Make a GEE Map', deadline:1, value:3, rubric:{'create a public GEE map':1, 'the GEE map has the name of the student':1, 'the layers have a proper name and not a default':1},description:'Watch the video on how to create a GEE map and make it public. Make a map with in your account. The map should have a title and the layers should have a proper name and not the default `layer` value'},
                ]},
        {topic:'Google Earth Engine to observe coarse scale landscape changes',
                video:[{title:"* Adding slider and interactivity"},
                        {title:"* Histogram matching"},{title:"Making a GIF"},
                        {title:"* Creating a sequence of images using timeFilter"}],  
                hw:[{title:'Make an interactive GEE map', deadline:2, value:10, rubric:{'Interactive component':3, 'Histogram matched at least 2 images of different time':2, 'the layers have a proper name and not a default value':1, 'The student put into context the observed changes':2, 'The presentation was within the alloted time and the student made an effective presentation':2 },description:'Watch the video on how to create a GEE map and make it public. Make a map with in your account. The map should have a title and the layers should have a proper name and not the default `layer` value'},
                ]},
        {topic:'Google Earth Engine pt2',
                video:[],  
                hw:[]},
        {topic:'Student presentations of their work using GEE data',         
                video:[],  
                hw:[]},
        {topic:'Student proposal presentation',         
                video:[],  
                hw:[{title:'Reading discussion questions', deadline:1, value:5, rubric:{'submitted well-thought questions on time':3, 'active participation in class discussion':2},description:'Come up with two or three discussion points related to each article posted in Sakai. These should be questions to provoke reflection and conversation with your classmates: if you have factual questions about anything mentioned in these articles, you should do the research to answer them yourself.'}]},
        {topic:'Reading discussion and lecture on orthorectification', 
                video:[],  
                hw:[]},
        {topic:'Lecture and practical session on orthorectification', 
                video:[],  
                hw:[]},
        {topic:'Meeting of progress report', 
                video:[],  
                hw:[]},
        {topic:'Meeting of progress report', 
                video:[],  
                hw:[]},
        {topic:'Present progress report to entire class', 
                video:[],  
                hw:[{title:'Reading discussion questions', deadline:1, value:5, rubric:{'submitted well-thought questions on time':3, 'active participation in class discussion':2},description:'Come up with two or three discussion points related to each article posted in Sakai. These should be questions to provoke reflection and conversation with your classmates: if you have factual questions about anything mentioned in these articles, you should do the research to answer them yourself.'}]},
        {topic:'Reading discussion', 
                video:[],  
                hw:[{title:'Final project', deadline:3, value:3, rubric:{},description:''}]},
        {topic:'Meeting of progress report', 
                video:[],  
                hw:[]},
        {topic:'Meeting of progress report', 
                video:[],  
                hw:[]},
        {topic:'Final project presentation', 
                video:[],  
                hw:[]},
        {topic:'Final project presentation', 
                video:[],  
                hw:[]},
        {topic:'Prepare tutorial', 
                video:[],  
                hw:[{title:'Tutorial based on your final project', deadline:1, value:5, rubric:{},description:'Make a written tutorial based on your final project. The tutorial should have print screens and be easy to follow by fellow students from the GEOG456 course'}]},
        {topic:'Student tutorial evaluation', 
                video:[],  
                hw:[]},
        {topic:'Final Exam', 
                video:'Final Exam',  
                hw:'Final Exam'}
        ],


        verifyDates(hwDate, daHW){
                if (hwDate > new Date(this.classesEnd)  && this.alert == 'on') {alert(daHW + " is after the last day")}
                this.feriados.forEach((e)=>
                    
                {   
                    feriado = new Date(e + ' ' + this.year);       
                    if (feriado.toDateString() == hwDate.toDateString()) {
                        if (this.alert == 'on'){alert(daHW + " has a conflict on " + feriado.toDateString())}
                        return this.conflict = 1;
                        }     
                        
                    })
                },
        
            fromTuesdayToThursday(daDate) {
                if (daDate.getDay() == 2){
                daDate.setDate(daDate.getDate()+ 2)}
                else {
                daDate.setDate(daDate.getDate()+ 5)}
            },
            
            fromTuesdayToThursdayTextDate(textDate){
                var newDate = new Date(textDate)
                
                if (newDate.getDay() == 2){
                        newDate.setDate(newDate.getDate()+ 2)
                }
                else {
                        newDate.setDate(newDate.getDate()+ 5)}
                return newDate
                },


            toDeadline(textDate, aNext) {
                var deadDate = this.fromTuesdayToThursdayTextDate(textDate)
                // if (aNext > 1){var deadDate = this.fromTuesdayToThursdayTextDate(deadDate.toDateString())}
                if (aNext > 1){for(var i = 1;i<aNext;i++) {deadDate = this.fromTuesdayToThursdayTextDate(deadDate.toDateString())}}

                this.verifyDates(deadDate,'test')
                while (this.conflict == 1){
                        this.conflict = 0
                        deadDate = this.fromTuesdayToThursdayTextDate(deadDate.toDateString())
                        this.verifyDates(deadDate,'test')}
                return 'before ' + deadDate.toDateString() + ' at 6 am'

        },

            makeTable(daTopic, aDate)
                {    
                daObj[aDate] = daTopic;
                var numRow = 0;

                if (Array.isArray(daTopic)) {
                var numRow = daTopic.length
                }
                if (numRow == 0){
                const tr = document.createElement('tr');
                const thDay = document.createElement('td');
                const thActivity = document.createElement('td');
                thDay.innerHTML = aDate
                tr.appendChild(thDay)
                thActivity.innerHTML = daTopic;
                tr.appendChild(thActivity);
                daTable.appendChild(tr)}
                if (numRow > 0){

                        var tr = document.createElement('tr');
                        const thDay = document.createElement('td');
                        thDay.setAttribute('rowspan', numRow)
                        thDay.innerHTML = aDate
                        tr.appendChild(thDay)
                        for(var i = 0; i < numRow; i++){
                        if (i > 0){
                                tr = document.createElement('tr');
                        }
                        const thActivity = document.createElement('td');
                        thActivity.innerHTML = daTopic[i].title;
                        tr.appendChild(thActivity);
                        if (daTopic[i].deadline != undefined) {
                                // aDate
                                // console.log(daTopic[i].deadline )
                                var deadDay = document.createElement('td');
                                
                                var newDate = this.toDeadline(aDate, daTopic[i].deadline )
                                deadDay.innerHTML = newDate
                                tr.appendChild(deadDay)
                        }

                        daTable.appendChild(tr)
                        }

                }
                
        },
        
            makeSchedule(tableID,value){ // value could be 'topics' , 'video' or 'hw'
                daObj = { }
                daTable = document.getElementById(tableID)
                var daDate = new Date(this.firstDayOfClass)
                this.topics.forEach((e,i)=>{
                if(e[value] == 'Final Exam'){
                    this.makeTable("Final Exam", 'Check official calendar')
                    return}
                if(i>0){this.fromTuesdayToThursday(daDate)}
                this.verifyDates(daDate,e[value])
                while (this.conflict == 1){ 
                    this.conflict = 0;
                    var daTopic = 'No Classes'
                    this.makeTable(daTopic, daDate.toDateString())
                    this.fromTuesdayToThursday(daDate)
                    this.verifyDates(daDate,e[value])
                }
                if (this.conflict == 0){
                    this.makeTable(e[value], daDate.toDateString())
                }
                
            })},

}