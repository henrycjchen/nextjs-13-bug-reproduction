import { useRouter } from "next/router"

// export function getServerSideProps() {
//     return {
//     }
// }

export default function Page1() {
    const route = useRouter()

    console.log('route.query.error', route.query.error)
    if (route.query.error) {
        throw new Error('error')
    }
    
    return 'page1'
}