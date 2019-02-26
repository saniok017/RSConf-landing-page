import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import { Link } from 'gatsby';

const Person = ({
  nickname, person, linkImage, linkButton, linkGit, buttonName, size,
}) => (
  <Card style={{ width: `${size}rem`, margin: '1em' }}>
    <Card.Img style={{ width: `${size}rem`, height: `${size}rem` }} variant="top" src={linkImage} />
    <Card.Body>
      {nickname !== '' && <Card.Title>{nickname}</Card.Title>}
      <Card.Text style={{ height: '50px' }}>{person}</Card.Text>
      {linkGit === '' ? (
        <Link to={linkButton}>
          <Button variant="primary">{buttonName}</Button>
        </Link>
      ) : (
        <Card.Link href={linkGit}>
          <Button variant="primary">{buttonName}</Button>
        </Card.Link>
      )}
    </Card.Body>
  </Card>
);

Person.defaultProps = {
  nickname: '',
  buttonName: <Trans>gitHub</Trans>,
  size: '12',
  person: '',
  linkImage: '',
  linkButton: '',
  linkGit: '',
};

Person.propTypes = {
  nickname: PropTypes.string,
  person: PropTypes.string,
  linkImage: PropTypes.string,
  linkButton: PropTypes.string,
  linkGit: PropTypes.string,
  buttonName: PropTypes.string,
  size: PropTypes.string,
};

export default Person;
