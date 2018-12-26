export const FLASH_ALERT = "flash:alert"
export const CLEAR_ALERT = "clear:alert"

export function flash_alert_warining(mess){
    return {
        type: FLASH_ALERT,
        payload: {
            mess
        }
    }
}



export const clear_alert =()=> {
    return {
        type: CLEAR_ALERT
    }
}