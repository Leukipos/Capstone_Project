import  { StyledLink }  from '../components/StyledLink';
import Link from 'next/link';



export default function HomePage() {

  return (
    <div>
      <h1>take my hand</h1>
      <p className='Dark'>hey.. schön dass du hier bist</p>
      <StyledLink href="/main">
        los gehts...
      </StyledLink>
    </div>
  );
};


  