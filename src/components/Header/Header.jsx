import './Header.css';
import avatarSvg from './images/avatar.svg?raw';

const Header = () => {
  return (
    <header className="headerSection" id="header">
      <div className="headerInner column">
        <div
          className="headerAvatarWrap"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: avatarSvg }}
        />
        <div className="headerCopy">
          <h1 className="headerTitle textCenter">Hi, I'm Derek!</h1>
          <p className="headerParagraph textCenter">
            Let's create learning experiences and environments your learners will love.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
