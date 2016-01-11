window.addEventListener("load", function() {
    var form = document.forms[0];
    var progSkillVal = document.getElementById('progSkillValue');
    progSkillVal.innerHTML = form.elements.progSkill.value;
    function rangeChange(e) {
        progSkillVal.innerHTML = form.elements.progSkill.value;
    }

    var range = document.getElementsByName("progSkill")[0];
    range.addEventListener("input", rangeChange);


});