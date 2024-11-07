function generateScenarios() {	
	const scenarios = {
		"grabbing object": 'Given the position of the robot "Sun" is "START"\nWhen the robot "Sun" moves to position "aboveObject"\nAnd the robot "Sun" grabs the object "Bottle"\nThen the object "Bottle" is grabbed\n',
		"moving object": 'Given the object "Bottle" is grabbed\nWhen the robot "Sun" moves to position "above bucket"\nAnd the robot "Sun" releases the object "Bottle"\nThen the object "Bottle" is released\n',
		"Sensing object": 'Given the sensor "Sensor" is active\nWhen the robot "Bob" picks the object "Ball"\nAnd the robot "Bob" moves to position "SENSOR_AREA"\nThen the object "Ball" is sensed\n',
		"Sorting object": 'Given the color of the object "Ball" is "green"\nAnd the sensor "Sensor" is active\nWhen the robot "Bob" moves to position "GREEN_BUCKET"\nAnd the robot "Bob" releases the object "Ball"\nThen the object "Ball" is sorted\n',
		"PickAndPlace1": 'Given the output "light" is OFF\nAnd the gripper "gripper" is closed\nAnd the signal of the button "greenButton" is ON\nWhen the output "light" activates\nAnd the robot "Rob" linearly moves to position "aboveObject"\nAnd the gripper "gripper" opens\nThen the position of the robot "Rob" is "aboveObject"\nAnd the gripper "gripper" is open\n',
		"PickAndPlace2": 'Given the position of the robot "Rob" is "aboveObject"\nAnd the gripper "gripper" is open\nWhen the gripper "gripper" closes\nAnd the robot "Rob" moves to position "placementLocation" with "fast" speed\nAnd the gripper "gripper" opens\nAnd the output "light" deactivates\nThen the output "light" is OFF\nAnd the position of the robot "Rob" is "placementLocation"\nAnd the gripper "gripper" is open\n'
	}

	const structuredScenarios = Object.keys(scenarios).map(name => ({
		name,
		value: 'Scenario: "' + name + '"\n' + scenarios[name],
		last_used: new Date().toISOString(),
		use_count: 0
	}));

	localStorage.setItem("scenarios", JSON.stringify(structuredScenarios));
}

function getScenarios() {
	return JSON.parse(localStorage.getItem("scenarios"));
}

function updateScenarios() {
	const scenarios = getScenarios();

	const sortedScenarios = sortScenarios(scenarios);
	const desiredOrder = sortedScenarios.map(scenario => scenario.name);

	const list = document.querySelector("ul.list__scenarios");
	const scenariosElements = Array.from(list.querySelectorAll("li.scenario"));

	// Sort and re-append items according to `desiredOrder`
	scenariosElements
		.sort((a, b) => {
			const indexA = desiredOrder.indexOf(a.textContent.trim());
			const indexB = desiredOrder.indexOf(b.textContent.trim());
			return indexA - indexB;
		})
		.forEach(item => list.appendChild(item));
}

function generateSteps() {
	const states = [
		'the position of the robot "Sun" is "START"\n',
		'the object "Bottle" is grabbed\n',
		'the object "Bottle" is released\n',
		'the object "Ball" is sensed\n',
		'the color of the object "Ball" is "green"\n',
		'the sensor "Sensor" is active\n',
		'the object "Ball" is sorted\n',
		'the output "light" is OFF\n',
		'the gripper "gripper" is closed\n',
		'the signal of the button "greenButton" is ON\n',
		'the position of the robot "Rob" is "aboveObject"\n',
		'the position of the robot "Rob" is "placementLocation"\n',
		'the gripper "gripper" is open\n',
	];

	const actions = [
		'the robot "Sun" moves to position "aboveObject"\n',
		'the robot "Sun" grabs the object "Bottle"\n',
		'the robot "Sun" moves to position "above bucket"\n',
		'the robot "Sun" releases the object "Bottle"\n',
		'the robot "Bob" picks the object "Ball"\n',
		'the robot "Bob" moves to position "SENSOR_AREA"\n',
		'the robot "Bob" moves to position "GREEN_BUCKET"\n',
		'the robot "Bob" releases the object "Ball"\n',
		'the output "light" activates\n',
		'the robot "Rob" linearly moves to position "aboveObject"\n',
		'the gripper "gripper" opens\n',
		'the gripper "gripper" closes\n',
		'the robot "Rob" moves to position "placementLocation" with "fast" speed\n',
		'the output "light" deactivates\n',
	];

	const structuredStates = Object.keys(states).map(value => ({
		value: states[value],
		category: "state",
		last_used: new Date().toISOString(),
		use_count: 0
	}));

	const structuredActions = Object.keys(actions).map(value => ({
		value: actions[value],
		category: "action",
		last_used: new Date().toISOString(),
		use_count: 0
	}));

	const structuredSteps = [...structuredStates, ...structuredActions];

	localStorage.setItem("steps", JSON.stringify(structuredSteps));
}

function getSteps() {
	return JSON.parse(localStorage.getItem("steps"));
}

function updateSteps() {
	const steps = getSteps();

	const filteredSteps = filterSteps(steps);
	const sortedSteps = sortSteps(filteredSteps);
	const desiredOrder = sortedSteps.map(step => step.value);

	const list = document.querySelector("ul.list__steps");
	const stepsElements = Array.from(list.querySelectorAll("li.step"));

	// Set visibility based on `filteredSteps`
	stepsElements.forEach(item => {
		if (desiredOrder.includes(item.textContent.trim() + "\n")) 
			item.style.display = "block";
		else item.style.display = "none";
	});

	// Sort and re-append the visible items according to `desiredOrder`
	stepsElements
		.filter(item => item.style.display !== "none")
		.sort((a, b) => {
			const indexA = desiredOrder.indexOf(a.textContent.trim() + "\n");
			const indexB = desiredOrder.indexOf(b.textContent.trim() + "\n");
			return indexA - indexB;
		})
		.forEach(item => list.appendChild(item));
}

function toggleScenarioLibrary() {
	const library = document.querySelector("#scenario-library");
	const stepsLibrary = document.querySelector("#steps-library");
	if (!library.style.display || library.style.display === "none") {
		library.style.display = "block";
		// Close steps library
		stepsLibrary.style.display = "none";
	} else if (library.style.display === "block") {
		library.style.display = "none";
	}
}

function toggleStepsLibrary() {
	const library = document.querySelector("#steps-library");
	const scenarioLibrary = document.querySelector("#scenario-library");
	if (!library.style.display || library.style.display === "none") {
		library.style.display = "block";
		// Close scenario library
		scenarioLibrary.style.display = "none";
	} else if (library.style.display === "block") {
		library.style.display = "none";
	}
}

function useScenario(key) {
	const scenarios = getScenarios();
	const scenario = scenarios.find(scenario => scenario.name === key);
    const value = scenario ? scenario.value : null;
	
	// Update usage
	scenario.last_used = new Date().toISOString();
	scenario.use_count += 1;
	localStorage.setItem("scenarios", JSON.stringify(scenarios));

	const editor = getCurrentAceEditor();
	const document = editor.env.document.doc;

	// Add selected scenario to editor
	const current = document.getValue();
	document.setValue(current + value);
}

function sortScenarios(scenarios) {
	const sortElement = document.querySelector("#scenario_sorting");
	const sortOption = sortElement ? sortElement.value : "alphabetical";

	switch (sortOption) {
		case "alphabetical": case "default": default:
			return scenarios.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
		case "most_recent":
			return scenarios.sort((a, b) => new Date(b.last_used) - new Date(a.last_used));
		case "most_used":
			return scenarios.sort((a, b) => b.use_count - a.use_count);
	}
}

function useStep(index) {
	const steps = getSteps();
	const step = steps[index];

	// Update usage
	step.last_used = new Date().toISOString();
	step.use_count += 1;
	localStorage.setItem("steps", JSON.stringify(steps));

	const editor = getCurrentAceEditor()
	const document = editor.env.document.doc

	// Add selected step to editor
	const current = document.getValue()
	document.setValue(current + step.value);
}

function sortSteps(steps) {
	const sortElement = document.querySelector("#steps_sorting");
	const sortOption = sortElement ? sortElement.value : "alphabetical";

	switch (sortOption) {
		case "alphabetical": case "default": default:
			return steps.sort((a, b) => a.value.toLowerCase().localeCompare(b.value.toLowerCase()));
		case "most_recent":
			return steps.sort((a, b) => new Date(b.last_used) - new Date(a.last_used));
		case "most_used":
			return steps.sort((a, b) => b.use_count - a.use_count);
	}
}

function filterSteps(steps) {
	const filterElement = document.querySelector("#steps_filter");
	const category = filterElement ? filterElement.value : "all";

	return category === "all"
		? steps
		: steps.filter(step => step.category === category);
}

function searchBar(className, searchBarId){
	let searchBarQuery = document.getElementById(searchBarId).value.toLowerCase();
	let scenarios = document.getElementsByClassName(className);
	let l = scenarios.length;
	for (let i = 0; i < l; i++){
		if (scenarios[i].textContent.toLowerCase().includes(searchBarQuery)){
			scenarios[i].style.display = "block";
		} else {
			scenarios[i].style.display = "none";
		}
	}
}


function generateSuggestions() {
	const editor = getScenariosAceEditor();
	const scenarios = getScenarios();
	const steps = getSteps();

	const customCompleter = {
        getCompletions: function(edit, session, pos, prefix, callback) {
			const suggestions = [];

			// Generates scenario suggestions.
			for (const sc of scenarios) {
				const suggestion = {
					caption: sc.name,
					value: sc.value,
					score: 1000,
					meta: 'scenario'
				}
				suggestions.push(suggestion);
			}

			// Generates steps suggestions.
			for (const st of steps) {
				const suggestion = {
					caption: st.value,
					value: st.value,
					score: 1000,
					meta: `step | ${st.category}`
				}
				suggestions.push(suggestion);
			}
    
            // Call the callback with modified suggestions
            callback(null, suggestions);
        }
    };

    // Add the custom completer to the editor
    editor.completers = [customCompleter];

    // Listen for change events to trigger autocomplete
    editor.on("change", function(e) {
        const cursorPosition = editor.getCursorPosition();
        const currentLine = editor.session.getLine(cursorPosition.row);
        const prefix = currentLine.substring(0, cursorPosition.column);
        if (prefix.length > 2) { // Trigger when more than 2 characters are typed
            editor.execCommand("startAutocomplete");
        }
    });
}


window.addEventListener('load', () => { 
    // Artificially creates scenarios & steps for the purpose of 
    // displaying, filtering and searching through them.
    generateScenarios();
    generateSteps();

    setTimeout (() => {
		generateSuggestions();

        // Step 1: Select the target element
        const editor = document.querySelector("#blockly-editor2");
        const targetNode = editor;

        // Step 2: Create a MutationObserver instance
        const observer = new MutationObserver((mutationsList, observer) => {
            // Step 3: Callback function to handle mutations
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {

                    const toolbox = editor.querySelector("div.blocklyToolboxContents");
                    const canvas = editor.querySelector("div.injectionDiv");
                    if (toolbox && canvas) {
                        let scenarioLibrary = document.querySelector("#scenario-library");
                        if (!scenarioLibrary) {
                            // Creates HTML scenario library panel from <template>
                            // Template: See index.html
                            const scenarioLibraryTemplate = document.querySelector("template#template__scenario-library");
                            const scenarioLibraryTemplateClone = scenarioLibraryTemplate.content.cloneNode(true);
                            canvas.appendChild(scenarioLibraryTemplateClone);

                            scenarioLibrary = document.querySelector("#scenario-library");
                            // Puts library right next to toolbox
                            const toolboxWidth = toolbox.offsetWidth;
                            scenarioLibrary.style.left = toolboxWidth;
                            
                            // Creates list of scenarios
                            const scenarios = getScenarios();
                            const list = document.createElement("ul");
                            list.classList.add("list__scenarios");
                            scenarioLibrary.append(list);
                            for (const sc of scenarios) {
                                const scenarioElement = document.createElement("li");
                                scenarioElement.classList.add("scenario");
                                scenarioElement.textContent = sc.name;
                                scenarioElement.onclick = () => useScenario(sc.name);
                                list.append(scenarioElement);
                            }

                            // Creates HTML steps library panel from <template>
                            // Template: See index.html
                            const stepsLibraryTemplate = document.querySelector("template#template__steps-library");
                            const stepsLibraryTemplateClone = stepsLibraryTemplate.content.cloneNode(true);
                            canvas.appendChild(stepsLibraryTemplateClone);

                            const stepsLibrary = document.querySelector("#steps-library");
                            // Puts library right next to toolbox
                            stepsLibrary.style.left = toolboxWidth;
                            
                            // Creates list of steps
                            const steps = getSteps();
                            const stepsList = document.createElement("ul");
                            stepsList.classList.add("list__steps");
                            stepsLibrary.append(stepsList);

                            for (const stepIndex in steps) {
                                const stepElement = document.createElement("li");
                                stepElement.classList.add("step");
                                stepElement.textContent = steps[stepIndex].value;
                                stepElement.onclick = () => useStep(stepIndex);
                                stepsList.append(stepElement);
                            }

                            // Creates HTML tabs in toolbar from <template>
                            // Template: See index.html
                            const libraryTemplate = document.querySelector("template#template__library-tabs");
                            const libraryTemplateClone = libraryTemplate.content.cloneNode(true);
                            toolbox.appendChild(libraryTemplateClone);
                        }
                    }
                }
            }
        });

        // Step 4: Configure the observer
        const config = {
            childList: true,     // Observe direct children
        };

        // Start observing the target element
        observer.observe(targetNode, config);

        // Example: To stop observing later
        // observer.disconnect();
        
    }, 200)
}, false);
