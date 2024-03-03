function Socials() {
    return (
        <>
            <button name='Furaffinity' className='socialButton'>
                <img className='icon' src='Fa_logo.svg' width='32' height='32' alt='Furaffinity icon'/>
                <a className='navButton' rel="noreferrer" target='_blank'
                   href='https://www.furaffinity.net/user/kairenvk'>Furaffinity</a>
            </button>
            <button name='Telegram' className='socialButton'>
                <img className='icon' src='telegram.svg' width='32' height='32' alt='Telegram icon'/>
                <a className='navButton' rel="noreferrer" target='_blank'
                   href='https://t.me/KairenVk'>Telegram</a>
            </button>
            <div id='Discord' className='socialButton'>
                <img className='icon' src='discord.svg' width='32' height='32' alt='Discord icon'/>
                <button className='navButton tooltip' onClick={copy_discord_username}>Discord</button>
            </div>
            <button name='Steam' className='socialButton'>
                <img className='icon' src='steam.svg' width='32' height='32' alt='Steam icon'/>
                <a className='navButton' rel="noreferrer" target='_blank'
                   href='https://steamcommunity.com/id/KairenVk/'>Steam</a>
            </button>
        </>
    )
}

function copy_discord_username() {
    navigator.clipboard.writeText('kairen_vanspark')
}
export default Socials;