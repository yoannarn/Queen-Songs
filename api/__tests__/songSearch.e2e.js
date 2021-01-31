import request from 'supertest';
import app from '../app';
import * as songsFunctions from '../songs/songSearch';

describe('Song search endpoint', () => {


    it('should search songs using empty param and retrieve empty array', (done) => {

        songsFunctions.songSearch = jest.fn().mockReturnValue([]);

        request(app)
            .get(`/`)
            .expect(400)
            .expect(() => {
                expect(songsFunctions.songSearch).toHaveBeenCalledTimes(0);
            })
            .end(done);
    });

    it('should search songs using empty param with unregular spaces and retrieve empty array', (done) => {

        songsFunctions.songSearch = jest.fn().mockReturnValue([]);

        request(app)
            .get(`/    `)
            .expect(400)
            .expect(() => {
                expect(songsFunctions.songSearch).toHaveBeenCalledTimes(0);
            })
            .end(done);
    });

    it('should search songs using a common letter and retrieve an array full of songs', (done) => {

        songsFunctions.songSearch = jest.fn().mockReturnValue(["Flash to the Rescue", "We Are Champions"]);

        request(app)
            .get(`/a`)
            .expect(200)
            .expect((response) => {
                const songs = response.body;
                expect(songsFunctions.songSearch).toHaveBeenCalledTimes(1);
                expect(songsFunctions.songSearch).toHaveBeenCalledWith('a');
                expect(songs).not.toHaveLength(0);
            })
            .end(done);
    });

});