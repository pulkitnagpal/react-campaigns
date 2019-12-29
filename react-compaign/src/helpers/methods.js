import data from '../assets/data/data.js';
import shortid from 'shortid';
import {TAB_INITIALS} from './constants'

const makeUnique = (arr) => {
    // make each row/event unique to play easily with those events
    return arr.map((item) => ({ ...item, hash: shortid.generate() }))
}

const sortByTimeForPast = (arr) => {
    // sort the events in a particular tab according to time for past time frame
    return arr.sort((a,b) => b.createdOn - a.createdOn);
}

const sortByTimeForFuture = (arr) => {
    // sort the events in a particular tab according to time for future time frame
    return arr.sort((a,b) => a.createdOn - b.createdOn);
}

const divideIntoTime = (arr, upcoming=[], past=[], live=[]) => {
    // divide the date according to the initial load as it may contain mixed time frames i.e
    // past, future or present
    const todayTimeStamp = new Date().getTime();
    for (let i = 0; i < arr.length; i++) {
        if (dayDifference(arr[i].createdOn) === 0) {
            live.push(arr[i])
        }
        else if (arr[i].createdOn > todayTimeStamp) {
            upcoming.push(arr[i])
        }
        else if (arr[i].createdOn < todayTimeStamp) {
            past.push(arr[i])
        }
    }
    return {
        upcoming : sortByTimeForFuture(upcoming), past : sortByTimeForPast(past), live
    }
}

const fillData = (allTabs, upcoming, past, live) => {
    return allTabs.map((tab) => {
        if (tab.name === 'upcoming') {
            tab.data = upcoming;
        }
        if (tab.name === 'live') {
            tab.data = live
        }
        if (tab.name === 'past') {
            tab.data = past
        }
        return tab
    })
}
export const loadDataFromLocal = () => {
    // loads data on first load of app, from dummy data;
    let totalEvents = makeUnique(data.data);
    const { upcoming, past, live } = divideIntoTime(totalEvents);
    return fillData(TAB_INITIALS, upcoming, past, live)
}

export const getFormattedDate = (date) => {
    // converts the date object to formatted string
    var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    return `${months[date.getMonth()]} ${date.getFullYear()}, ${date.getDate()}`
}

export const updateTabs = (hash, newStamp, currentTab, Tabs) => {

    const newTabs = Object.assign([], Tabs);
    let mergedArr = [];
    // first loop through the previous tab configs and find the changed event in the current tab
    for (let i=0; i<newTabs.length; i++){
        let tabData = newTabs[i].data;
        if (newTabs[i].name === currentTab.name){
            let index = tabData.findIndex((event)=> event.hash === hash);
            tabData[index].createdOn = newStamp;
        }
        mergedArr = mergedArr.concat(tabData)
    }
    const { upcoming, past, live } = divideIntoTime(mergedArr);
    // return the updated tabs
    return fillData(TAB_INITIALS, upcoming, past, live)
}

export const dayDifference = (newTimeStamp) => {
    const difference = new Date().getTime() - newTimeStamp;
    const daysDifference = Math.floor(difference/1000/60/60/24);
    return Math.abs(daysDifference);
}