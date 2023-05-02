
export const getLocalStorageLanguage = () => {
    //условный список языков
    const languageList = ['ru','en','tr',]
    const data = localStorage.getItem('lang')
    const index = data ? languageList.indexOf(data,0) : 0
    return index === -1 ? 0 : index
}
