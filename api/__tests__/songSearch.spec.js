import { songSearch } from '../songs/songSearch';

describe('Song search among all songs', () => {

    let songs = [];

    beforeEach(() => {
        songs = [
            "The Hitman",
            "White Man",
            "Under Pressure",
            "The Wedding March",
            "The Show Must Go On",
            "We Are Champions",
            "Road 66",
            "We Will Rock You",
            "You Don't Fool Me",
            "No-One But You (Only the Good Die Young)"
        ];
    });

    it('should try with empty string as input and should return empty array', () => {
        expect(songSearch('', songs)).toEqual([]);
        expect(songSearch(' ', songs)).toEqual([]);
    });

    it('should return Song "The Hitman"', () => {
        expect(songSearch('hitman', songs)).toHaveLength(1);
        expect(songSearch(' hitman ', songs)).toHaveLength(1);
    });

    it('should return "Road 66" searching by number as str', () => {
        expect(songSearch('66', songs)).toContainEqual("Road 66");
    });

    it('should return songs including following segments testing unregalar spaces and special characters', () => {
        const segmentsWith_it = songSearch('it', songs);
        expect(segmentsWith_it).toHaveLength(2);
        expect(segmentsWith_it).toContainEqual('White Man');
        expect(segmentsWith_it).toContainEqual('The Hitman');

        const segmentsWith_w = songSearch('w', songs);
        expect(segmentsWith_w).toHaveLength(5);

        const segmentsWith_dash = songSearch('-', songs);
        expect(segmentsWith_dash).toHaveLength(1);

        const segmentsWith_NoDashOne = songSearch('No- One', songs);
        expect(segmentsWith_NoDashOne).toHaveLength(1);

        const segmentsWithWedding = songSearch('TheWedding March', songs);
        expect(segmentsWithWedding).toHaveLength(1);

        const segmentsWith_a = songSearch('a', songs);
        expect(segmentsWith_a).not.toHaveLength(0);
    });
});