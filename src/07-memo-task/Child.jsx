
export const Child = React.memo(({ number, increment }) => {

    console.log('  I re-generate myself :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => {
                increment( number );
            } }
        >
            { number }
        </button>
    )
})
