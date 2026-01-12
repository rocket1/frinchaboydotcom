import React from "react";
import {configure, shallow, render, mount} from "enzyme";
import {expect, assert} from 'chai'
import DemoModal from './demo-modal';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe("DemoModal", () => {

    const _badProps = {
        project: undefined
    };

    const _goodProps = {
        project: {
            "title": "Test",
            "imgSrc": "/img/example.png",
            "description": "Some desc",
            "tech": [
                "AngularJS",
                "HTML",
                "LESS/CSS"
            ],
            "screenshots": [
                "/img/whisperer.resized.png"
            ]
        }
    };

    /**
     *
     * @returns {*}
     */
    const demoModal = (props) => {
        return mount(
            <DemoModal {...props} />
        );
    };

    describe('the modal with an undefined project ', () => {
        it('should give empty HTML when project is undefined', () => {
            const mountedDemoModal = demoModal(_badProps);
            const elem = mountedDemoModal.find('div');
            expect(elem.length).to.equal(0);
        });
    });

    describe('the modal with a defined project', () => {
        it('should give non-empty HTML when project is defined', () => {
            const mountedDemoModal = demoModal(_goodProps);
            const elem = mountedDemoModal.find('div');
            expect(elem.length).to.be.above(0);
        });
    });
});
