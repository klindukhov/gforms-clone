export const getForms = async () =>{
    return await JSON.parse(localStorage.getItem("forms")??'');
}

export const setForms = (forms: object[]) => {
    localStorage.setItem("forms", JSON.stringify(forms));
}