/**
 * Récupère les données associées à un cookie
 * @param {string} key Clé du cookie à récupérer
 * @return {string|null} 
 */
function getCookie(key) {
    const cookies = document.cookie.split('; ')
    const value = cookies
        .find(c => c.startsWith(key + "="))
        ?.split('=')[1]
    if (value === undefined) {
        return null
    } 
    return decodeURIComponent(value)
}

/**
 * Créer ou modifie la valeur d'un cookie avec une durée spécifique
 * @param {string} key 
 * @param {string} value 
 * @param {number} days Durée de vie du cookie (en jours)
 */
function setCookie(key, value, days) {
    const date = new Date()
    date.setDate(date.getDate() + days)
    document.cookie = `${key}=${encodeURIComponent(value)}; expires=${date.toUTCString()};` 
}

// setCookie('key', 'value', 2)
// console.log(getCookie('key'))