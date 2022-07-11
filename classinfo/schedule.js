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
    topics:[
        {topic:'Introduction to class', 
        
            video:[{title:"Intro to HTML, CSS, and JS"},
                    {title:"Make a github webpage"}],
            hw:[{title:'Make basic Upload page to GitHub', deadline:'before next class', value:4, rubric:{'page runs from Github':1, 'div and h1 elements created and have style':1, 'div has onclick event to console.log':1, 'h1 has onclick event with alert':1},description:'Create a webpage that has a div with a background color besides white and an h1 element. The h1 element has to have a onclick event with an alert that says Hello there, and the div should have an onclick event that creates a console.log that says the `the div was clicked`. Upload this HTML page to github and submit the link of the page in Sakai. Note: if the link does not work from your cellphone and works in your computer, it probably means that you sent me a local link and not the webpage link in Github'}]},
        
        {topic:'Intro to JS (arrays, objects, loops and functions', 
        
            video:[{title:"JSON array and object"},
                    {title:"Loops, functions and DOM"}],
            hw:[{title:'Show and Tell 1', deadline:'before next class', value:5, rubric:{'provided 3 valuable examples':3, 'the examples were put in context of the student`s interest':1, 'presented within the alloted time':1},description:'Find three visualizations that you would like to share with the rest of the class. This visualizations should focus on presenting time and not space. Hence, do not present figures that have map components we will share those at another time. The figures should be related to your area of interest'},
            {title:'Find dataset', deadline:'before next class', value:1, rubric:{'found a dataset':1},description:'find a dataset that has a temporal component and that is related to your interest. You will use this dataset for future homeworks'}
                ]},
        
        {topic:'Show and tell 1: Graphs with temporal component', 
        
                video:[{title:"Get data into your script"},
                        {title:"Transform your data"},
                        {title:"Into to Plotly"}],      
                hw:[{title:'Make several Plotly figures and post in a Page', deadline:'before 2next class', value:12, rubric:{'bar plot':1, 'scatter plot':1, 'polar plot':1, 'another complex plot ':1,'used colors that facilitate reading of graph data':4, 'graphs have titles and legend': 4,'described process and limitations for each figure':4},description:'Make a scaterplot, a barplot, a polar plot and some complex plot using Plotly and a dataset of your own interest that has a temporal component. Try to create figures that explore the how a certain process changes through time. Each figure could be a single HTML file with a Title and a short description of the limitations and benefits of the type of visualization used. Create an index.html page that has a link to each of the plots and submit the link to the index.html file in Sakai.'}
            ]},
        
        {topic:'Introduction to Plotly', 
                video:[],                 
                hw:[]},
        
        {topic:'Student presentations of their work', 
        
                video:[],  
                hw:[{title:'Reading discussion questions', deadline:'before next class', value:5, rubric:{'submitted well-thought questions on time':3, 'active participation in class discussion':2},description:'Come up with two or three discussion points related to each article posted in Sakai. These should be questions to provoke reflection and conversation with your classmates: if you have factual questions about anything mentioned in these articles, you should do the research to answer them yourself.'}]},

        {topic:'Reading discussion and lecture on time in maps', 
        
                video:[],  
                hw:[{title:'Show and Tell 2', deadline:'before next class', value:5, rubric:{'provided 3 valuable examples':3, 'the examples were put in context of the student`s interest':1, 'presented within the alloted time':1},description:'Find three web based geovisualizations that you would like to share with the rest of the class. This visualizations should focus on presenting both time and space using mostly vectors. The figures should be related to your area of interest'},
                    {title:'Find dataset', deadline:'before next class', value:1, rubric:{'found a dataset':1},description:'find a dataset that has a both a temporal and geographic component and that is related to your interest. You will use this dataset for a future homework. It can be CSV, geoJSON or a shapefile'}
                    ]},


        {topic:'Show and tell 2', 
        
                video:[{title:"Intro to webmapping using Leaflet"}],  
                hw:[{title:'Make a leaflet map with at least one maker', deadline:'before next class', value:3, rubric:{'leaflet map with OSM tile background':1, 'has a marker':1, 'the marker has a popup':1},description:'Make a leaflet map outside of Chapel Hill. The map has an OSM tile background, a marker and the marker has popup with information about the place that is marking'}]},
        
        {topic:'Introduction to web maps', 
                video:[{title:"Using a slider - hurricane map"}, {title:"Using a slider and a button - US cessions map"}],  
                hw:[{title:'Make a leaflet map with at least one marker', deadline:'before next class', value:3, rubric:{'leaflet map with OSM tile background':1, 'has a marker':1, 'the marker has a popup':1},description:'Make a leaflet map outside of Chapel Hill. The map has an OSM tile background, a marker and the marker has popup with information about the place that is marking'}]},
        
        day3:'How we model the world',
        day4:'Sharing our maps pt1 / Github',
        day5:'Sharing our maps pt2 / GPS',
        day6:'Projections',
        day7:'Projections and Georeferencing',
        day8:'Exercise: georeference UNC maps and create tiles',
        day9:'Webmaps',
        day10: 'Test 1',
        day11: 'Tables',
        day12: 'Choropleths',// check date
        day13: 'Classification Schemes and Ratios',
        day14: 'Apply classification and ratios to your data',
        day15: 'Cartography',
        day16: 'Share your maps / RECAP',
        day17: 'Test 2',
        day18: 'Vector Spatial Analysis',
        day19: 'Vector Spatial Analysis Practical',
        day20: 'Introduction to Rasters and to GEE',
        day21: 'Share your maps / Answer GEE questions',
        day22: 'Intro to remote sensing',
        day23: 'Raster Spatial Analysis',
        day24: 'Test 3',
        day25: 'Remote Sensing Presentation',
        day26: 'Remote Sensing Presentation',
        day27: 'Topography and elevation models',
        day28: 'Discuss Test 3 / RECAP',
        // day29: 'RECAP',
        FinalExam: 'FINAL EXAM']
    ,

}