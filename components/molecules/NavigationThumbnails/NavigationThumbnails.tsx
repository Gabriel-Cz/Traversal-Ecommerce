
import Link from 'next/link'
import { Row, Col, Image } from 'react-bootstrap'
import { BaseNavLinkType } from "types/Base"
import styles from './NavigationThumbnails.module.scss';

interface NavigationThumbnailsProps {
  navigationLinks: BaseNavLinkType[];
}

export const NavigationThumbnails: React.FC<NavigationThumbnailsProps> = ({ navigationLinks }) => {
  return (
    <Row className="mt-5" justify-content-center>
      {navigationLinks.map(link => (
        <Col xs={6} md={3} className="mt-4 mt-md-0" key={link.name}>
          <Link href={`/categories/${link.path}`} passHref>
            <a>
              <div className={styles.thumbnailContainer}>
                <div className={styles.thumbnailOverflow}>
                  <span>
                    {link.name}
                  </span>
                </div>
                <Image fluid className="py-0 px-0 my-0 mx-0" src={link.image} />
              </div>
            </a>
          </Link>
        </Col>
      ))}
    </Row>
  )
}