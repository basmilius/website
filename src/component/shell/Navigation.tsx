import { useBoolean, useDebounce, useMounted, useWindowScroll } from "@latte-ui/hooks";
import { createSlotFill } from "@latte-ui/slot-fill";
import { memo, useEffect, useMemo, useRef } from "react";
import { Link, useRouter } from "@/component/platform";
import { BMIcon } from "@/component/shell";
import { BlobCanvas } from "@/logic/util/blobs";

import styles from "./Navigation.module.scss";
import logo from "../../image/logo.svg";

const {Fill, Slot} = createSlotFill("bm-navigation");

export default memo(() => {
    const isMounted = useMounted();
    const {pathname} = useRouter();
    const {y} = useWindowScroll();
    const [isMobileMenuOpen, setMobileMenuOpen] = useBoolean();

    const isMobileMenuCanvasVisible = useDebounce(isMobileMenuOpen, 600);
    const isMenuCollapsed = useMemo(() => isMounted && y > 0, [y, isMounted]);
    const isTitleVisible = useMemo(() => isMounted && y > 320, [y, isMounted]);

    useEffect(() => setMobileMenuOpen(false), [pathname]);

    return (<>
        <a href={"#content"} className={styles.skipToContent}>
            <BMIcon name="fas down-to-line"/>
            <span>Skip to content</span>
        </a>

        <header className={`${styles.header} ${isMenuCollapsed ? styles.headerScrolled : ""}`}>
            <nav className={styles.nav}>
                <button
                    className={styles.navToggle}
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Toggle navigation">
                    <BMIcon
                        className={styles.navToggleIcon}
                        name="fas bars"/>
                </button>

                <Link passHref href="/">
                    <a className={styles.logo}>
                        <img src={logo.src} alt="Logo" className={styles.logoImage}/>
                    </a>
                </Link>

                <div className={styles.navVariable}>
                    {isMounted && (
                        <span className={`${styles.navTitle} ${isTitleVisible ? styles.navTitleVisible : ""}`}>
                            <Slot/>
                        </span>
                    )}
                </div>

                <NavigationItemDefault label="Home" url="/" isExact/>
                <NavigationItemDefault label="About me" url="/about" isExact/>
                <NavigationItemDefault label="Work" url="/work" notActiveFor={["/work/meteocons"]}/>
                <NavigationItemDefault label="Meteocons" url="/work/meteocons" isExact/>
                <NavigationItemDefault label="Contact" url="/contact" isExact/>
            </nav>
        </header>

        <div className={`${styles.bigNavigation} ${isMobileMenuOpen ? styles.bigNavigationOpen : styles.bigNavigationClosed}`}>
            {(isMobileMenuOpen || isMobileMenuCanvasVisible) && <BigNavigationCanvas/>}

            <button
                className={styles.bigNavigationClose}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Toggle navigation">
                <BMIcon
                    className={styles.bigNavigationCloseIcon}
                    name="fas xmark-large"/>
            </button>

            <nav className={styles.bigNavigationNav}>
                <NavigationItemMobile label="Home" url="/" isExact/>
                <NavigationItemMobile label="About me" url="/about" isExact/>
                <NavigationItemMobile label="Work" url="/work" notActiveFor={["/work/meteocons"]}/>
                <NavigationItemMobile label="Meteocons" url="/work/meteocons" isExact/>
                <NavigationItemMobile label="Contact" url="/contact" isExact/>
            </nav>
        </div>
    </>);
});

const NavigationItem = memo(({className, classNameActive, isExact, label, notActiveFor, url, onClick}: NavigationItemProps) => {
    const {pathname} = useRouter();

    const isActive = useMemo(() => isExact ? pathname === url : pathname.startsWith(url) && !notActiveFor?.includes(pathname), [pathname, url, isExact]);

    return (
        <Link passHref href={url}>
            <a
                onClick={() => onClick?.()}
                className={`${className} ${isActive ? classNameActive : ""}`}>
                {label}
            </a>
        </Link>
    );
});

const NavigationItemDefault = memo(({isExact, label, notActiveFor, url, onClick}: Omit<NavigationItemProps, "className" | "classNameActive">) => (
    <NavigationItem
        className={styles.navItem}
        classNameActive={styles.navItemActive}
        isExact={isExact}
        label={label}
        notActiveFor={notActiveFor}
        url={url}
        onClick={onClick}/>
));

const NavigationItemMobile = memo(({isExact, label, notActiveFor, url, onClick}: Omit<NavigationItemProps, "className" | "classNameActive">) => (
    <NavigationItem
        className={styles.bigNavigationItem}
        classNameActive={styles.bigNavigationItemActive}
        isExact={isExact}
        label={label}
        notActiveFor={notActiveFor}
        url={url}
        onClick={onClick}/>
));

const BigNavigationCanvas = memo(() => {
    const canvasRef = useRef<HTMLCanvasElement>();

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        let blobsCanvas = new BlobCanvas(canvasRef.current, true);
        blobsCanvas.start();

        return () => {
            blobsCanvas.stop();
            blobsCanvas.destroy();
        };
    }, [canvasRef]);

    return (
        <canvas ref={canvasRef} className={styles.canvas}/>
    );
});

export const BMNavigationTitle = memo(({title}: { title: string; }) => (
    <Fill>{title}</Fill>
));

interface NavigationItemProps {
    className: string;
    classNameActive: string;
    isExact?: boolean;
    label: string;
    notActiveFor?: string[];
    url: string;
    onClick?: Function;
}
