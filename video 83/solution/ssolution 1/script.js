
    function sortStudents(names) {
      const houses = {
        Gryffindor: [],
        Hufflepuff: [],
        Ravenclaw: [],
        Slytherin: []
      };

      names.forEach(name => {
        if (name.length < 6) houses.Gryffindor.push(name);
        else if (name.length < 8) houses.Hufflepuff.push(name);
        else if (name.length < 12) houses.Ravenclaw.push(name);
        else houses.Slytherin.push(name);
      });

      return houses;
    }

    function runSortingHat() {
      const students = ['Harry', 'Hermione', 'Draco', 'Cedric', 'Voldemort', 'Bellatrix', 'LunaLovegood'];
      const result = sortStudents(students);
      console.log("House Sorting Result:", result);
      alert("Check the console for sorted house details.");
    }
 