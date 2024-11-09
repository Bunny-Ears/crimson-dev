import { ref } from 'vue'


export const install = ref(null);
export const checked = ref(null);
export const name = ref(null);
export const notApp = ref(null);

export function updateStorage(valueName, storedValue) {
    console.log(storedValue)
    try { storedValue = JSON.parse(storedValue); }
    finally { localStorage.setItem(valueName, storedValue); }
    console.log(storedValue);
};

export function savepdf(element) {
    html2pdf().from(element).save();
};