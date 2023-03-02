import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {    
    const lowerCasePage = page.replace(/ /g, "").toLowerCase();
    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            className={`${selectedPage === lowerCasePage} ? "text-text-selected" : "text-text-primary"
            transition duration-500 ease-in-out hover:text-text-selected`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link 