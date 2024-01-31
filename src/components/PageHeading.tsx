function PageHeading() {
    return (
        <>
            <img className={'pattern'} src={'https://bytegrad.com/course-assets/js/1/pattern.svg'} alt={'pattern'}/>
            <a href={"/"} className={'logo'}>
                <img src="https://bytegrad.com/course-assets/js/1/logo.svg" alt="logo"/>
            </a>
            <h1>Give Feedback. <span>Publicly.</span></h1>
        </>
    );
}


export default PageHeading;