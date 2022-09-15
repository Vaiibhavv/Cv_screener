
console.log("This is the cv screener app");

/// to create a array, in which information of all candidate is stored.

const profiles = [
    {
        name:"Shiv Kumar", 
        age:22, 
        Course:"B.Tech",
        Programming_Language: "C++",
        CGPA:9.10,
        image:"https://randomuser.me/api/portraits/men/72.jpg",
        gender:"Male"

    },
    {
        name:"Bhushan Marathe", 
        age:24, 
        Course:"B.Tech",
        Programming_Language: "Python",
        CGPA:8.10,
        image:"https://randomuser.me/api/portraits/men/75.jpg",
        gender:"Male"
    },
    {
        name:"Avinash Sharma", 
        age:21, 
        Course:"B.Tech",
        Programming_Language: "Go",
        CGPA:6.32,
        image:"https://randomuser.me/api/portraits/men/77.jpg",
        gender:"Male"
    },
    {
        name:"Suresh Mishra", 
        age:22, 
        Course:"B.Tech",
        Programming_Language: "Pearl",
        CGPA:8.45,
        image:"https://randomuser.me/api/portraits/men/5.jpg",
        gender:"Male"
    },
    {
        name:"Umesh Sharma", 
        age:23, 
        Course:"B.Tech",
        Programming_Language: "Java",
        CGPA:7.33,
        image:"https://randomuser.me/api/portraits/men/7.jpg",
        gender:"Male"
    }
]

 // create a iterator to iterate over the profiles.
function nextIterator(contain)
{
    lastIndex=0;
    return{

        next: function()
        {
            if(lastIndex<contain.length)
            {
                return{ value:contain[lastIndex++], done:false}
            }

            else
            {
                return{
                    done:true
                }
            }
        }
    };
}
///to assigning the data for next candidate.

const candi= nextIterator(profiles);
nextCV();

// to access the next button, by using the eventlistner.
const nextbtn = document.getElementById('next');
nextbtn.addEventListener('click',nextCV);

// to get the data of the next candidate by using the nextCV() function.by iterator.
function nextCV()
{
    let candidate=candi.next().value;   // here candidate is a iterator value.

    // to access the dom of image 
    let im= document.getElementById("image");
    // dom of profile data.
    let profile= document.getElementById("profile");
   
    // if iterator is iterate over the all applications, then alert will be show, neither iteration will be conitune

    if(candidate!= undefined){
        im.innerHTML = `<img src='${candidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${candidate.name}</li>
        <li class="list-group-item">Age: ${candidate.age}</li>
        <li class="list-group-item">Gender: ${candidate.gender}</li>
        <li class="list-group-item">Progarmming Language known : ${candidate.Programming_Language}</li>
        <li class="list-group-item">Speciallization in ${candidate.Course}</li>
        <li class="list-group-item">Current CGPA : ${candidate.CGPA}</li>
      </ul>`;
        }
        else{
            alert('End of candidate applications');
            window.location.reload();
        }
    
}


