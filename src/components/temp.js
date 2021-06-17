{
    Dataset.filter(k => ((k.name === klinik) && (k.source === source))).map(komment => <div key={komment.index}>
        <p>Rezension-{komment.index + 1} : {komment.komment}</p>
        <p>Result: {komment.positive}</p>
    </div>
    )
}


{
    Dataset.map(komment => {
        if ((komment.klinik === klinik) && ((komment.source === source))) {
            return (<div key={komment.index}>
                <p>Rezension-{komment.index + 1} : {komment.komment}</p>
                <p>Result: {komment.positive}</p>
            </div>
            )
        }
        else {
            return (null)
        }

<h3>{source === 'klinikDe' ? 'Klinikbewertungen.de ' : source === 'googleMaps' ? 'Google Maps ' : source === 'Alle' ? 'Alle' : ''} {klinik ? 'Rezensionen von' : ''} {klinik}</h3>


            <h3>Klinik: {klinik}</h3>
            <h3>Source: {source === 'Beide' ? 'Klinikbewertungen.de und Google Maps' : source}</h3>


        if (source === 'googleMaps') {
            Data = Dataset.filter(k => (k.source === 'googleMaps'))
        } else if (source === 'klinikDe') {
            Data = Dataset.filter(k => (k.source === 'klinikDe'))
        }


        if (klinik !== 'Alle') {
            Data = Dataset.filter(k => (k.name === klinik))
        }

        if (source !== 'Alle') {
            Data = Dataset.filter(k => (k.source === source))
        }


        const Data = ((klinik === 'Alle') & (klinik === 'Alle')) ? Dataset :
            klinik !== 'Alle' ? Dataset.filter(k => (k.name === klinik)) :
                source !== 'Alle' ? Dataset.filter(k => (k.source === source)) :
                    Dataset.filter(k => (k.source === source & k.name === klinik)

                        <<<<<<>>>>>>> pagination

                    {
                            [...Array(pagesCount)].map((page, i) =>
                                <PaginationItem active={i === currentPage} key={i}>
                                    <PaginationLink onClick={e => handleClick(e, i)} href="#">
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        }



                        < PaginationLink > - Total Pages : { pagesCount } - </PaginationLink >


                    <Input type="select" name="seite" id="seite" value={currentPage} onChange={(e) => handleSelect(e.target.value)} >
                        <option>Alle</option>
                        {pages.map((p, index) =>
                            <option key={index}>{p}</option>
                        )}
                    </Input>

                                        <select name="seite" id="seite" value={currentPage} onChange={(e) => handleSelect(e.target.value)} >
                        {pages.map((p, index) =>
                            <option key={index}>{p}</option>
                        )}
                    </select>


                    <Input type="select" name="source" id="source" value={source} onChange={(e) => handleSource(e.target.value)}>
                        <option>Alle</option>
                        <option value='klinikDe'>Klinikbewertungen.de</option>
                        <option value='googleMaps'>Google Maps</option>
                    </Input>