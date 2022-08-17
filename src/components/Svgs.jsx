export const SearchIcon = ({ stroke = "black" }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 19L14.65 14.65" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const CartIcon = () => (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1L1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5L16 1H4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 5H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 9C14 11.2091 12.2091 13 10 13C7.79086 13 6 11.2091 6 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const PlusIcon = ({ action }) => (
    <svg width="15" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => action()}>
        <rect y="15" width="32" height="2" fill="#8F91A3" />
        <rect x="17" width="32" height="2" transform="rotate(90 17 0)" fill="#8F91A3" />
    </svg>
)

export const MinusIcon = ({ action }) => (
    <svg width="15" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => action()}>
        <rect width="15" height="2" fill="#8F91A3" />
    </svg>
)

export const UserIcon = () => (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="9" cy="5" r="4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 1L15 8L8 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const TwitterIcon = () => (
    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 2.00001C22.0424 2.67549 20.9821 3.19212 19.86 3.53001C18.6264 2.11155 16.6384 1.61412 14.8821 2.28446C13.1258 2.9548 11.9748 4.65031 12 6.53001V7.53001C8.43066 7.62256 5.05203 5.92198 3 3.00001C3 3.00001 -1 12 8 16C5.94053 17.398 3.48716 18.0989 1 18C10 23 21 18 21 6.50001C20.9991 6.22146 20.9723 5.9436 20.92 5.67001C21.9406 4.6635 22.6608 3.39272 23 2.00001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const FacebookIcon = () => (
    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1H9C6.23858 1 4 3.23858 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.44772 8.44772 5 9 5H12V1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const InstagramIcon = () => (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
            <rect x="1" y="1" width="20" height="20" rx="5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 10.37C15.2532 12.077 14.3831 13.7538 12.8417 14.5297C11.3003 15.3055 9.4351 15.0054 8.2149 13.7852C6.99469 12.5649 6.69455 10.6998 7.47038 9.15837C8.24621 7.61697 9.92308 6.74687 11.6301 6.99999C13.373 7.25846 14.7416 8.62702 15.0001 10.37Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
)

export const ForumIcon = () => (
    <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="86" height="86" rx="24" fill="#FE7865" />
        <circle cx="43" cy="43" r="20" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="43" cy="43" r="8" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M28.8599 28.8601L37.3399 37.3401" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M48.6602 48.6599L57.1402 57.1399" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M48.6602 37.3401L57.1402 28.8601" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M48.6602 37.34L55.7202 30.28" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M28.8599 57.1399L37.3399 48.6599" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const ChatIcon = () => (
    <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="86" height="86" rx="24" fill="#FE7865" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M61 49C61 51.2091 59.2091 53 57 53H33L25 61V29C25 26.7909 26.7909 25 29 25H57C59.2091 25 61 26.7909 61 29V49Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)