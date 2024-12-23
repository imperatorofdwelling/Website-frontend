import GoogleLogo from '@/public/images/login/googleLogo.svg'
import TwitterLogo from '@/public/images/login/twitterLogo.svg'
import Link from 'next/link'

const Auth0: React.FC = () => {
    return (
        <div className="flex gap-2 justify-center items-center mt-6 w-full text-xs leading-none text-center text-white whitespace-nowrap">
            <Link href={'#'} className="default-hover-active">
                <GoogleLogo />
            </Link>
            <span className="self-stretch my-auto text-sm">Or</span>
            <Link href={'#'} className="default-hover-active">
                <TwitterLogo />
            </Link>
        </div>
    )
}

export default Auth0
