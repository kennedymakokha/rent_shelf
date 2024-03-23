export const handleTab = ({ title, tabs,setFilter }) => {
    let newTab = []
    tabs.forEach(tab => {
        if (tab.title === title) {
            let v = { ...tab, state: true }
            newTab.push(v)
            setFilter(tab.value)
            return v;
        }
        else {
            let v = { ...tab, state: false }
            newTab.push(v)
            return v;
        }

    });

    setTabs(newTab)

}