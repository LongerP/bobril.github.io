import * as b from 'bobril';
import * as styles from './styles';
import * as m from 'bobril-m';
import * as AppButton from './button';

export const Button = AppButton;

interface IData {
    leftChildren: b.IBobrilChildren[];
    rightChildren?: b.IBobrilChildren[];
    contentWidth?: number;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createDerivedComponent<IData>(m.Paper, {
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(
                [
                    d.leftChildren && b.styledDiv(
                        d.leftChildren.map((button) => {
                            return b.styledDiv(
                                button,
                                styles.button,
                            );
                        }),
                        styles.buttonsContainer
                    ),
                    d.rightChildren && b.styledDiv(
                        d.rightChildren.map((button) => {
                            return b.styledDiv(
                                button,
                                styles.rightButton,
                            );
                        }),
                        styles.rightButtonsContainer
                    )
                ],
                d.contentWidth && {
                    minWidth: 852,
                    maxWidth: d.contentWidth,
                    margin: 'auto'
                }
            )
        ];

        b.style(
            me,
            styles.appBar,
            {background: m.primary2Color()}
        );
    }
});