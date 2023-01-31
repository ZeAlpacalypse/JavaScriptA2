//On load we select the container holding the tabs,
//then listen for the taab to be clicked
//then select all the tabs that were clicked, which is only one 
window.onload = function MakingTabs()
{
    document
        .querySelector('#tabContainer')
        .addEventListener('click', TabClickEvent);
    document.querySelectorAll('.tab')[0].click();
};
//Adding the click event for the tabs
function TabClickEvent(evt)
{
 console.log('place holder');
}