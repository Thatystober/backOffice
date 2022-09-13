import '../styles/box.scss';

type Props = {
  children: React.ReactNode; // Suporta varios tipos, mas não deixa de ser um tipo
};

export function Box(props:Props){
    return(
        <div className="box">
            {props.children}
        </div>
    )
}