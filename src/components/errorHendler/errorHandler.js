export default function  ErrorHandler({error}) {
    const {location:{state: {referrer}}} = error
    const {history:{location:{state:{referrer:{message}}}}} = error;
    return (
        <div>
            <h1>Error</h1>
            {JSON.stringify(message)}
        </div>
    );
}
